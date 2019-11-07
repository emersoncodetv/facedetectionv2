# Adios a las encuestas!!

### Resumen

La comunicación o lenguaje no verbal es el 80% de lo que se dice, es un tipo de lenguaje corporal que los seres humanos utilizan para transmitir mensajes, en la mayoría de casos de forma inconsciente. Es sabido desde hace ya mucho tiempo que la información no sólo se transmite con las palabras, sino también a través de los movimientos corporales cómo las posturas, las miradas, las distancias entre unos y otros, la forma de sentarse o incluso de caminar.

### Abstract

Communication or nonverbal language is 80% of what is said, it is a type of body language that human beings use to transmit messages, in most cases unconsciously. It has been known for a long time that information is not only transmitted with words, but also through body movements such as postures, looks, distances between one another, the way of sitting or even walking.

## Inspiración

En la mayoría, por no decir todas los eventos de tecnología, al final te piden diligenciar una encuesta, con las cuales se pretende comprende que tan efectivo fue el evento, o que tan buena fue una charla. La realidad es que estas encuestas son propensas a ser mal diligenciadas, por diferentes factores; cansancio, pereza, premura, entre otros.

## Solución

En los eventos que tienen un formato de cátedra, donde los asistentes están ya sea de pie o sentados prestando atención a una tarima o area de presentación, el objetivo es durante la charla/presentación de los expositores, capturar las expresiones faciales de los asistentes y tener un minutograma discriminando por las diferentes expresiones/reacciones recolectadas, e.g.: atento, distraídos, enojado, triste, etc.

# Paso a paso para el despliegue de la aplicación 

#### Instalar Node.JS

##### macOS

Instalar brew

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Actualizar brew

```shell
brew update
```

Instalar Node.JS

```shell
brew install node
```

##### Linux Ubuntu

Habilitar el repositorio NodeSource 

```shell
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

Instalar Node.JS

```shell
sudo apt install nodejs
```

#### Instalar la version LTS de Node.JS

Instalar n 

```shell
npm install -g n
```

Actualizar Node.JS a la version LTS

```shell
n lts
```

#### Instalar Fn Project CLI

##### macOS con brew

```shell
brew install fn
```

##### Linux or macOS

```shell
curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install | sh
```

#### Configuración del OCI CLI 

MacOS, Linux, and Unix 

1. Abre una terminal.

2. Para iniciar el script de instalación, ejecute el siguiente comando.

```shell
bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"
```

3. Iniciar la configuración del CLI

```shell
oci setup config
```

Read more [here](./Backend/README.md) # It works!