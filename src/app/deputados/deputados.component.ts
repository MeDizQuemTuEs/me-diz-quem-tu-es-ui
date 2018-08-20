import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  reader: any;
  listaDeputados = [];
  listaDeputadosOrige = [];
  selectedCityName;


  constructor(http: Http, private appService: AppService) {

    this.appService.getParlamentares().subscribe((data: any) => {
      this.listaDeputados = data;
      this.listaDeputadosOrige = data;
    });
  }

  ngOnInit() {
  }


  filterParlamentar(nome: string) {
    return this.listaDeputadosOrige.filter(parlamentar =>
      parlamentar.nome.indexOf(nome) === 0);
  }

  public onSelectParlamentar(event, parlamentar) {
    if (parlamentar !== undefined) {
      this.listaDeputados = [];
      this.listaDeputados.push(this.filterParlamentar(parlamentar)[0]);
    }
  }

  onRestartLista() {
    this.listaDeputados = this.listaDeputadosOrige;
  }

  onChangeLista($event, parlamentar) {
    if (parlamentar !== undefined) {
      this.listaDeputados = [];
      this.listaDeputados.push(this.filterParlamentar(parlamentar)[0]);
    }
  }



}
