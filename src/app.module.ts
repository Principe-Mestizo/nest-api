import { Module } from '@nestjs/common';
import { CategorieModule } from './categorie/categorie.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PersonalModule } from './personal/personal.module';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './prisma/prima.module';
import { PersonaModule } from './persona/persona.module';
import { RolesModule } from './roles/roles.module';
import { ProductsModule } from './products/products.module';
import { TipoPersonaModule } from './tipo-persona/tipo-persona.module';
import { SexoModule } from './sexo/sexo.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';
import { PaisModule } from './pais/pais.module';
import { DireccionModule } from './direccion/direccion.module';
import { TelefonoPersonalModule } from './telefono-personal/telefono-personal.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ClienteModule } from './cliente/cliente.module';
import { MarcasModule } from './marcas/marcas.module';
import { SurcursalModule } from './surcursal/surcursal.module';
import { TipoZonaModule } from './tipo-zona/tipo-zona.module';
import { TipoViaModule } from './tipo-via/tipo-via.module';
import { TipoTelefonoModule } from './tipo-telefono/tipo-telefono.module';

@Module({
  imports: [
    CategorieModule,
    AuthModule,
    PersonalModule,
    CommonModule,
    PrismaModule,
    PersonaModule,
    RolesModule,
    ProductsModule,
    TipoPersonaModule,
    SexoModule,
    TipoDocumentoModule,
    PaisModule,
    DireccionModule,
    TelefonoPersonalModule,
    ProveedoresModule,
    ClienteModule,
    MarcasModule,
    SurcursalModule,
    TipoZonaModule,
    TipoViaModule,
    TipoTelefonoModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
