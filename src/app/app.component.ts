import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLanguage = 'es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'estructura-proyecto';

  constructor(
    private translate: TranslateService
  ) {
    this.initLanguage();
  }

  private initLanguage() {
    this.translate.setDefaultLang(defaultLanguage);
  }

  public changeLanguage(languge: string) {
    this.translate.use(languge);
  }
}

