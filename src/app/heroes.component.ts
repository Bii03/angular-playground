import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
        // this.getHeroesSlowly();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    // getHeroesSlowly(): void {
    //     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    // }


    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        if (!name) {
            return;
        }

        name = name.trim();

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h.id !== hero.id);

                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });
    }
}
