# SP-2

legge til html-filer, se at de er sammenkobla

add placeholder img?
add js files?

index.mjs just run functions, not hold them?

user can register

// Veldig usikker på hvordan jeg burde organisere js filene :()

29.04.24

For å logge inn må jeg ta kontakt med server, med valid bruker

Når jeg logger inn må jeg bruke key og token, 

Jeg nå først sende en request til server, få tilbake token
Brke token til å få key
Bruke key og token for å få bruker tilbake og få den til å dukke opp på profil.

Det er problem med login

Hva skjer når jeg putter inn valid info? 
Blir sendt til profil, fordi jeg fikk ok, og jeg fikk token, 
!! men før jeg sender til profil må jeg få tak i key :)

Kommenterte ut function takeUserToProfile, token funker, jeg må sette igang get api key i login success

Det funker når jeg går til create-listing, for da setter jeg igang key function haha
Hvordan får jeg 


Nå har jeg token og key i profil, så jeg burde kunne hente brukeren :)
Jeg må trykke på oppdater for å få fram profilen, hvordan kan jeg få profilen til å dukke opp på første gang jeg kommer til profile-page?
Kanskje jeg må sette igang create api inni profil.mjs?

I works, an await was missing??, no need for reload func

Next?
edit avatar
https://docs.noroff.dev/docs/v2/auction-house/profiles, update profile

Or/ make it so the profile opened depends on what profile is logged in?
querystring???

// first tidy up index
// search funker
// open listing funker
// prøve å ta vekk pagination
// if I dont try to include the image, all the listings show up
//

// 1308, index is ok, next change out josephine
