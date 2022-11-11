import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // * Pega os parametros da rota sobre
    this.activatedRoute.params.subscribe(({ id, username }) =>
      console.log(id, username)
    );

    // * Pega os parametros de pesquisa da rota, por exemplo, ?nome=bruno&idade=29
    this.activatedRoute.queryParams.subscribe((res) => console.log(res));

    setInterval(() => {
      //this.router.navigate(['404']); //^funciona igual ao routerlink que usamos no lugar do href =>  precisa passar a rota em um array
      //this.router.navigateByUrl('404'); //^faz o reload da página toda (todos os componentes)
    }, 5000);
  }
}
