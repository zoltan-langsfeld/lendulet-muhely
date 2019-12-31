const ARANY_ILDIKO = {
    name: 'Arany Ildikó',
    phoneNr: '+36 70 408 7150',
    email: 'marathon2000@gmail.com'
};

const BOGAR_JUDIT = {
    name: 'Bogár Judit',
    phoneNr: '+36 30 273 7739',
    email: 'judibogar@gmail.com'
};

const FILEP_HAJNALKA = {
    name: 'Filep Hajnalka',
    phoneNr: '+36 20 410 1008',
    email: 'neteger@gmail.com'
};

const PAPP_TIMEA = {
    name: 'Papp Tímea',
    phoneNr: '+36 20 433 4425',
    email: 'ptmilus@gmail.com'
};

window.onload = function () {
    $('#arany-ildiko .name').append(ARANY_ILDIKO.name);
    $('#arany-ildiko .phone-nr').append(ARANY_ILDIKO.phoneNr);
    $('#arany-ildiko .email').append(ARANY_ILDIKO.email);

    $('#bogar-judit .name').append(BOGAR_JUDIT.name);
    $('#bogar-judit .phone-nr').append(BOGAR_JUDIT.phoneNr);
    $('#bogar-judit .email').append(BOGAR_JUDIT.email);

    $('#filep-hajnalka .name').append(FILEP_HAJNALKA.name);
    $('#filep-hajnalka .phone-nr').append(FILEP_HAJNALKA.phoneNr);
    $('#filep-hajnalka .email').append(FILEP_HAJNALKA.email);

    $('#papp-timea .name').append(PAPP_TIMEA.name);
    $('#papp-timea .phone-nr').append(PAPP_TIMEA.phoneNr);
    $('#papp-timea .email').append(PAPP_TIMEA.email);
};
