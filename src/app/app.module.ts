import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { ProductCardModule } from './product-card/product-card.module';
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        DropdownModule,
        IconTooltipModule,
        ProductCardModule,
    ]
})
export class AppModule { }
