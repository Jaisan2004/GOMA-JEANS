import { Component } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca.service';
import { TallaService } from '../../../../services/talla.service';

@Component({
  selector: 'app-hombre',
  standalone: false,
  
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {
  sueldos = [1700, 1600, 1900, 1, 1, 1, 1, 1, 1, 1];

  noProductos: boolean = false;
  totalProductos: number = 0;
  paginacion: number = 1;

  ordenar: string = "precio,DESC";

  productoRango1: number = 0;
  productoRango2: number = 0;

  modulo: any;
  pagina: number = 1;
  marca: string = "";
  talla: string = "";

  parametros: any;

  url_drive="https://drive.google.com/thumbnail?id=";

  dataProductos: any = [];
  dataMarcas: any = [];
  dataTallas: any = [];

  tallasMujer: any[] = [];
  tallasHombre: any[] = [];

  marcasOn: any[] = [];
  tallasOn: any[] = [];

  constructor(
    private _productoService: ProductoService, 
    private _marcaService: MarcaService,
    private _route: ActivatedRoute, 
    private _router: Router,
    private _tallaService: TallaService) {

  }

  ngOnInit() {
    this.modulo = this._route.snapshot.pathFromRoot[2].url[0].path;
    this._route.paramMap.subscribe(params => {
      this.pagina = params.get('pagina') ? Number(params.get('pagina')) : 1;
      this.marca = params.get('marca') ? params.get('marca')! : "no";
      this.talla = params.get('talla') ? params.get('talla')! : "no";
      
      this.getProductos(this.pagina); // 👈 Cargar productos al cambiar de página
      this.getMarcas();
      this.getTallas();
      
    });
   
  }

  ngOnChanges() {
    this.getProductos(this.pagina);
  }

  getProductos(pagina: any) {
    console.log(this.talla);
    this._productoService.getProductos(pagina, this.ordenar, this.marca, this.talla).subscribe((data)=>{
      this.totalProductos = Number(data.total_producto[0].n_producto);
      this.paginacion = Math.ceil(this.totalProductos / 12);
      this.resultado(this.pagina, this.paginacion);
      this.dataProductos = data.productos;
    }, (error) => {
      if(error.status == 404){
        this.noProductos = true;
      }
    });
  }

  getMarcas() {
    this._marcaService.getMarcas().subscribe((data)=>{
      this.dataMarcas = data;
    });
  }

  getTallas() {
    this._tallaService.getTallas().subscribe((data)=>{
      this.dataTallas = data;
      this.tallasMujer = this.dataTallas.filter((talla: any) => talla.id_genero === 2);
      this.tallasHombre = this.dataTallas.filter((talla: any) => talla.id_genero === 1);
    });
  }

  ordenarProductos(orden: string) {
    this.ordenar = orden;
    this.getProductos(this.pagina);
  }

  filtroTallas(talla: string) {
    if(talla == this.talla && this.talla.split(",").length >1){
      this.talla = talla;
      this.tallasOn = this.talla.split(",");
      return;
    }
    if(this.talla == "todo"){
      this.talla = talla;
      this.tallasOn = this.talla.split(",");
      this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
    }else{
      this.tallasOn = this.talla.split(",");
      if(this.tallasOn.length > 1){
        const tallaLenth = this.tallasOn.length;
        for (let i = 0; i < this.tallasOn.length; i++) {
          if(this.tallasOn[i] == talla){
            this.tallasOn.splice(i, 1);
          }
        }
        if(tallaLenth == this.tallasOn.length){
          this.talla = `${this.talla},${talla}`;
          this.tallasOn = this.talla.split(",");
          this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
        }else {
          this.talla = this.tallasOn.toString();
          this.tallasOn = this.talla.split(",");
          this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
        }
      } else if(this.tallasOn[0] == talla){
        this.tallasOn[0] = "todo";
        this.talla = this.tallasOn.toString();
        this.tallasOn = this.talla.split(",");
        this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
      } else {
        this.talla = `${this.talla},${talla}`;
        this.tallasOn = this.talla.split(",");
        this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
      }
      
    }
  }

  filtroMarcas(marca: string) {
    if(marca == this.marca && this.marca.split(",").length >1){
      this.marca = marca;
      this.marcasOn = this.marca.split(",");
      return;
    }
    if(this.marca == "todo"){
      this.marca = marca;
      this.marcasOn = this.marca.split(",");
      this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
    }else{
      this.marcasOn = this.marca.split(",");
      if(this.marcasOn.length > 1){
        const marcaLenth = this.marcasOn.length;
        for (let i = 0; i < this.marcasOn.length; i++) {
          if(this.marcasOn[i] == marca){
            this.marcasOn.splice(i, 1);
          }
        }
        if(marcaLenth == this.marcasOn.length){
          this.marca = `${this.marca},${marca}`;
          this.marcasOn = this.marca.split(",");
          this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
        }else {
          this.marca = this.marcasOn.toString();
          this.marcasOn = this.marca.split(",");
          this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
        }
      } else if(this.marcasOn[0] == marca){
        this.marcasOn[0] = "todo";
        this.marca = this.marcasOn.toString();
        this.marcasOn = this.marca.split(",");
        this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
      } else {
        this.marca = `${this.marca},${marca}`;
        this.marcasOn = this.marca.split(",");
        this._router.navigate([`productos/${this.modulo}/${this.pagina}/${this.marca}/${this.talla}`]);
      }
      
    }
  }

  resultado(pagina: number, paginacion: number) {
    if(pagina == 1){
      this.productoRango1 = 1;
      this.productoRango2 = 12;
    }
    else{
      this.productoRango1 = (pagina-1)*12+1;
      if(pagina == paginacion){
        this.productoRango2 = this.totalProductos;
      }else{
        this.productoRango2 = pagina*12;
      }
    }
    
  }
}
