# IonicApp
aplicacion movil de venta de pasajes de transporte
# TransporteApp

Aplicación móvil creada con Ionic y Angular para gestión de transporte.

## Tecnologías

- Ionic Framework
- Angular
- Capacitor

## Instalación luego de clonar
- git clone urlRepository
- npm install -g @ionic/cli
- npm install -g @angular/cli
- npm install @capacitor
- npm install @capacitor/cli
- git remote add origin urlRepository ( agregar un repositorio remoto )
- git pull origin main ( traer todos los cambios desde el repo a tu proyecto )
- git fetch origin ( tarer solamente los cambios acutalizados)

## Hacer push colaboradores
// primero conectar tu vs code con tu cuenta de github..
- git pull origin main --rebase ( siempre traer todos los cambios de repositorio a tu proyecto, si no lo haces no te dejara hacer push)
- git add .  ( agregar todos los cambios que hicieron )
- git commit -m "Mensaje claro y conciso del cambio" ( agregar un commit)
- git push origin main ( hacer el push o enviar al repositorio)


## compilación

```bash
npm install
ionic serve
