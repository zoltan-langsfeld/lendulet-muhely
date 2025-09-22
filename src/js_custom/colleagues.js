const ARANY_ILDIKO = {
    name: 'Sándorné Arany Ildikó',
    title: 'gyógypedagógus, logopédus',
    phoneNr: '+36 70 408 7150',
    email: 'marathon2000@gmail.com'
};

const BEDO_LIZA = {
    name: 'Bedő Ilona Liza',
    title: 'klinikai szakpszichológus',
    phoneNr: '+36 30 274 2252',
    email: 'bedo.liz@gmail.com'
};

const BOGAR_JUDIT = {
    name: 'Bogár Judit',
    title: 'klinikai gyermek- és ifjúsági szakpszichológus',
    phoneNr: '+36 30 273 7739',
    email: 'judibogar@gmail.com'
};

const FILEP_HAJNALKA = {
    name: 'Filep Hajnalka',
    title: 'pszichoterapeuta, klinikai szakpszichológus, családterapeuta',
    phoneNr: '+36 20 410 1008',
    email: 'neteger@gmail.com'
};

const PAPP_TIMEA = {
    name: 'Papp Tímea',
    title: 'gyermek- és ifjúsági klinikai szakpszichológus',
    phoneNr: '+36 20 433 4425',
    email: 'ptmilus@gmail.com'
};

const LANGO_REBEKA = {
    name: 'Mázló-Langó Rebeka',
    title: 'Pszichológus, DSZIT terapeuta, képzésben lévő pár- és családterapeuta',
    phoneNr: '+36 20 667 9656',
    email: 'langorebeka@gmail.com'
};

window.onload = function () {
    $('#arany-ildiko .name').append(ARANY_ILDIKO.name);
    $('#arany-ildiko .title').append(ARANY_ILDIKO.title);
    $('#arany-ildiko .phone-nr').append(ARANY_ILDIKO.phoneNr);
    $('#arany-ildiko .email').append(ARANY_ILDIKO.email);

    $('#bedo-liza .name').append(BEDO_LIZA.name);
    $('#bedo-liza .title').append(BEDO_LIZA.title);
    $('#bedo-liza .phone-nr').append(BEDO_LIZA.phoneNr);
    $('#bedo-liza .email').append(BEDO_LIZA.email);

    $('#bogar-judit .name').append(BOGAR_JUDIT.name);
    $('#bogar-judit .title').append(BOGAR_JUDIT.title);
    $('#bogar-judit .phone-nr').append(BOGAR_JUDIT.phoneNr);
    $('#bogar-judit .email').append(BOGAR_JUDIT.email);

    $('#filep-hajnalka .name').append(FILEP_HAJNALKA.name);
    $('#filep-hajnalka .title').append(FILEP_HAJNALKA.title);
    $('#filep-hajnalka .phone-nr').append(FILEP_HAJNALKA.phoneNr);
    $('#filep-hajnalka .email').append(FILEP_HAJNALKA.email);

    $('#papp-timea .name').append(PAPP_TIMEA.name);
    $('#papp-timea .title').append(PAPP_TIMEA.title);
    $('#papp-timea .phone-nr').append(PAPP_TIMEA.phoneNr);
    $('#papp-timea .email').append(PAPP_TIMEA.email);

    $('#lango-rebeka .name').append(LANGO_REBEKA.name);
    $('#lango-rebeka .title').append(LANGO_REBEKA.title);
    $('#lango-rebeka .phone-nr').append(LANGO_REBEKA.phoneNr);
    $('#lango-rebeka .email').append(LANGO_REBEKA.email);
};
