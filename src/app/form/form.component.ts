import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../companies/company';
import { CompanyService } from '../companies/company.service';
import { Juego } from '../juegos/juego';
import { JuegoService } from '../juegos/juego.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  juego: Juego = new Juego();
  title: string = 'Crear Juego';
  categorias: any[] = [{title: 'Shooter', value: 'SHOOTER'}, {title: 'MOBA', value: 'MOBA'},
  {title: 'RPG', value: 'RPG'}, {title: 'MMORPG', value: 'MMORPG'}, {title: 'Roguelike', value: 'ROGUELIKE'},
  {title: 'Metroidvania', value: 'METROIDVANIA'}];
  companies: Company[];

  constructor(private juegoService: JuegoService, private router: Router,  private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }

  

  ngOnInit(): void {
      this.loadJuego();
      this.loadCompanies();
  }
  create(): void {
    this.juegoService.create(this.juego).subscribe(
      juego => {
        this.router.navigate(['/juegos']);
      }
    );
  }
  public update(): void {
    this.juegoService.update(this.juego).subscribe(
      response => this.router.navigate(['/juegos'])
    );
  }
  loadJuego(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.title = 'Editar Juego';
        this.juegoService.getJuego(id).subscribe(
          juego => this.juego = juego
        );
      } else {
        this.title = 'Crear Juego';
      }
    });
  }
  compareCompany(companyToCompare: Company, companySelected: Company) {
    if (!companyToCompare || !companySelected) {
      return false;
    }
    return companyToCompare.idCompany === companySelected.idCompany;
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
  }
}
