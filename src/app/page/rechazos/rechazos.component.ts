import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AquirerService } from 'src/app/service/aquirer.service';
import { rechazonacional } from 'src/app/model/rechazonacional.model';
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { DetalleSintaxis } from 'src/app/model/detallesintaxis.model';
import Swal from 'sweetalert2';
import * as xlsx from 'xlsx';
import * as XLSX from 'xlsx';
import { DetallerechazosModalComponent } from 'src/app/page/detallerechazos-modal/detallerechazos-modal.component';

@Component({
  selector: 'app-rechazos',
  templateUrl: './rechazos.component.html',
  styleUrls: ['./rechazos.component.css']
})
export class RechazosComponent implements OnInit {


  fechaactual = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  Rechazo: any;
  estatus: any;
  dataRS: any;
  DetalleSintaxis: any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private datePipe: DatePipe, 
    private AquirerService: AquirerService,  
    private route: ActivatedRoute
    ) { }
    rechazosNacCol: string[] = ['myColumn', 'dtFechaProceso', 'codrechazo', 'vNumNeg', 'tipoTrans',
    'vAdq', 'vEmi', 'vImporte', 'referencia', 'rrn'];

  dataRechazoNac = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {

    this.Rechazo = this.formBuilder.group({
      pvFechaIni: [''],
      pvFechaFin: [''],
      pvCodTransaccion: ['', Validators.required],
      pvCodRechazo: ['', Validators.required]
    });

  }
  openDialog(element): void {
    console.info('elemento rechazo', element);
    //this.router.navigate(['/detallerechazo',element], { relativeTo: this.route ,skipLocationChange : true});
    this.router.navigate(['/detallerechazo',element]);
  /*   const dialogRef = this.dialog.open(DetallerechazosModalComponent, {
      disableClose: true, width: '1800px',data: element
    }); */
  }

  applyFilter(filterValue: string) {
    this.dataRechazoNac.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    var fechaI = !this.Rechazo.value.pvFechaIni ? this.fechaactual.value : this.Rechazo.value.pvFechaIni;
    var fechaF = !this.Rechazo.value.pvFechaFin ? this.fechaactual.value : this.Rechazo.value.pvFechaFin;
    this.Rechazo.value.pvFechaIni = this.datePipe.transform(fechaI, 'yyyyMMdd');
    this.Rechazo.value.pvFechaFin = this.datePipe.transform(fechaF, 'yyyyMMdd');
    
    
    this.AquirerService.getConsultaRechazo()
      .subscribe(
        data => {
          console.log("getConsultaRechSintaxis Request is successful", data);
          console.log("Aqui va el DATA", data);
          if (data.length == 0) {
            Swal.fire({
              icon: 'info',
              text: 'No hay datos!'
            })
           
          } else {
            this.dataRechazoNac = new MatTableDataSource(data);
            localStorage.setItem('dataRechazoSintaxis', JSON.stringify(data));
            this.dataRechazoNac.paginator = this.paginator;
          }

        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error al obtener los rechazos',
            text: 'Favor de reportarlo al administrador del sistema'
          })
          console.log("Error", error);
          this.dataRechazoNac = new MatTableDataSource();
          localStorage.clear();
        });

  }
}