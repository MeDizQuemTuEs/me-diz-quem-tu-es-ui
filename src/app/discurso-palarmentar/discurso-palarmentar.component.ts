import { Component, OnInit, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-discurso-palarmentar',
  templateUrl: './discurso-palarmentar.component.html',
  styleUrls: ['./discurso-palarmentar.component.css']
})

export class DiscursoPalarmentarComponent implements OnInit {


  listaDiscursos = [];

  nome: string;
  nomeFormatado: string;
  urlFoto: string;
  urlParlamentar: string;
  urlGrafConexoes;
  urlGrafWordCloud;
  listaDeputadosOrige = [];
  listaDiscusos = [];


  constructor(http: Http, private appService: AppService, private route: ActivatedRoute, private sanitizer: DomSanitizer
  ) {

    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.nomeFormatado = this.formatString(this.nome);
      this.urlGrafConexoes = this.getSafeUrl('http://localhost:4200/assets/deputados_grafico/' + this.nomeFormatado + '.html');
      this.urlGrafWordCloud = '../../assets/word_cloud/' + this.nomeFormatado + '.png';

      this.appService.getParlamentares().subscribe((data: any) => {
        this.listaDeputadosOrige = data;
        this.urlFoto = this.filterParlamentar(this.nome)[0].urlFoto;
      });
      this.appService.getDiscursos(this.nomeFormatado).subscribe((data: any) => {
        this.listaDiscusos = data[this.nome];
      });

    });



  }


  filterParlamentar(nome: string) {
    return this.listaDeputadosOrige.filter(parlamentar =>
      parlamentar.nome.indexOf(nome) === 0);
  }

  filterDiscursos(nome: string) {
    return this.listaDeputadosOrige.filter(parlamentar =>
      parlamentar.nome.indexOf(nome) === 0);
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  ngOnInit() {
  }

  formatString(nome: string) {
    return nome.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_');
  }

  limitaTexto(texto: string) {
    texto.slice(0, 60);
  }
}
