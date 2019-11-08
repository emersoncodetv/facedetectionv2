# Paso a paso despliegue Back-End

#### Seguir los pasos de [Getting Started](https://www.oracle.com/webfolder/technetwork/tutorials/infographics/oci_faas_gettingstarted_quickview/functions_quickview_top/functions_quickview/index.html#)

- A. Set up your tenancy
- B. Set up a local machine as a dev environment...
  - **OMITIR** ...Or ... set up an OCI compute instance as a dev environment
- C. Complete dev environment setup
- D. Create, deploy, and invoke your function

`<group-name>  ` FACE_DETECTION

`<compartment-name>` FACE_DETECTION

`<private-key-file-name>` FACE_DETECTION

`<public-key-file-name>` FACE_DETECTION_PUBLIC

`<my-context>` FACE_DETECTION

#### Desplegar las Funciones en Oracle Cloud

Ejecute los siguientes commandos

```shell
cd Backend/functions/
```

```shell
fn deploy --app FACE_DETECTION get-full-next-offer
```

```shell
fn deploy --app FACE_DETECTION get-next-offer
```

```shell
fn deploy --app FACE_DETECTION get-save-item-webpage
```

```shell
fn deploy --app FACE_DETECTION gget-user-data
```

