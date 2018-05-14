import { NgModule, ModuleWithProviders } from '@angular/core';
import { AcademyComponent } from './components/academy-component';
import { AcademyProvider } from './providers/academy-provider';
import { PodeComponent } from './components/pode-component';
import { PodeProvider } from './providers/pode-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        AcademyComponent,
        PodeComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        AcademyComponent,
        PodeComponent
    ]
})
export class IonicPodeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicPodeModule,
            providers: [AcademyProvider, PodeProvider]
        };
    }
}