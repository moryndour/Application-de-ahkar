/* ============ RÉFÉRENCES DOM ============ */
let accuiel = document.getElementById("accuiel");
let page1 = document.getElementById("page1");
let menubtn = document.getElementById("menubtn");
let menu = document.getElementById("menu");
let matin = document.getElementById("matin");
let soir = document.getElementById("soir");
let nuit = document.getElementById("nuit");
let reveil = document.getElementById("reveil");

let adhkarsMatin = document.getElementById("adhkarsMatin");
let adhkarssoir = document.getElementById("adhkarssoir");
let adhkarsNuit = document.getElementById("adhkarsNuit");
let adhkarsReveil = document.getElementById("adhkarsReveil");

let retour = document.getElementById("retour");
let retour1 = document.getElementById("retour1");
let retour2 = document.getElementById("retour2");
let retour3 = document.getElementById("retour3");
let retour4 = document.getElementById("retour4");

let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");

let chapelet = document.getElementById("chapelet");
let cpt = document.getElementById("cpt");
let val = document.getElementById("val");
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");
let heartChapelet = document.getElementById("heartChapelet");
let shareChapelet = document.getElementById("shareChapelet");

let favoris = document.getElementById("favoris");
let recherche = document.getElementById("recherche");
let parametres = document.getElementById("parametres");

let navAccueil = document.getElementById("navAccueil");
let navFavoris = document.getElementById("navFavoris");
let navRecherche = document.getElementById("navRecherche");
let navParametres = document.getElementById("navParametres");

let menuAccueil = document.getElementById("menuAccueil");
let menuFavoris = document.getElementById("menuFavoris");
let menuRecherche = document.getElementById("menuRecherche");
let menuParametres = document.getElementById("menuParametres");

let retourFavoris = document.getElementById("retourFavoris");
let retourRecherche = document.getElementById("retourRecherche");
let retourParametres = document.getElementById("retourParametres");

let listeFavoris = document.getElementById("listeFavoris");
let favorisVide = document.getElementById("favorisVide");
let inputRecherche = document.getElementById("inputRecherche");
let resultatsRecherche = document.getElementById("resultatsRecherche");
let rechercheVide = document.getElementById("rechercheVide");
let btnResetFavoris = document.getElementById("btnResetFavoris");

setTimeout(() => {
    page1.classList.add("hidden");
    accuiel.classList.remove("hidden");
}, 3000);

/* ============ DONNÉES ============ */
const invocations = [
    { arabe: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", traduction: "J'agrée Allah comme Seigneur, l'Islam comme religion et Muhammad ﷺ comme Prophète.", nombre: 3, hadith: "Celui qui prononce cette invocation le matin avec sincérité, Allah lui garantit l'entrée au Paradis et le Prophète ﷺ le prendra par la main jusqu'à ce qu'il y entre" },
    { arabe: "سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ", traduction: "Gloire et louange à Allah du nombre de Ses créatures, de Sa propre Satisfaction, de la lourdeur de Son Trône et du nombre de Ses Paroles.", nombre: 3, hadith: "Cette invocation, dite 3 fois, a une immense récompense : elle est plus lourde dans la balance que tout le rappel accompli durant la journée." },
    { arabe: "بِسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَ لاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ العَلِيمُ", traduction: "Au nom d'Allah, tel qu'en compagnie de Son Nom rien sur Terre ni au ciel ne peut nuire, Lui l'Audient, l'Omniscient.", nombre: 3, hadith: "Celui qui récitera cette invocation le matin, rien ne lui nuira jusqu'au soir; quant à celui qui la récitera le soir rien ne lui nuira jusqu'au matin." },
    { arabe: "أَعُوذُ بِكلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", nombre: 3, traduction: "Je me mets sous la protection des paroles parfaites d'Allah contre le mal qu'Il a créé", hadith: "Lors d'un voyage, aucun mal ne lui sera fait jusqu'à ce qu'il quitte l'endroit où il vient d'arriver. Ne lui nuira pas la piqûre de toutes bêtes venimeuses au cours de cette nuit" },
    { arabe: "اللهُ لاَ إِلَهَ إِلاَّ هُوَ الحَيُّ القَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَ لاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَ مَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَ مَا خَلْفَهُمْ وَ لاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَ الأَرْضَ وَ لاَ يَئُودُهُ حِفْظُهُمَا وَ هُوَ العَلَيُّ العَظِيمُ", traduction: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui n'a besoin de rien et dont toute chose dépend « al-Qayyûm ». Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la Terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n'embrassent que ce qu'Il veut. Son Kursî (Piédestal) déborde les cieux et la Terre et leur garde ne Lui coûte aucune peine. Et Il est le Très Haut, l'Immense.", nombre: 1, hadith: "Celui qui récite Āyat al-Kursî le matin est protégé des djinns jusqu'au soir, et celui qui la récite le soir est protégé jusqu'au matin, par la permission d'Allah." },
    { arabe: "قُلْ هُوَ اللهُ أَحَدٌ ۞ اللهُ الصَّمَدُ ۞ لَمْ يَلِدْ وَلَمْ يُولَدْ ۞ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", traduction: "Dis : « Il est Allah, Unique ۞ Allah Le Seul à être imploré pour ce que nous désirons ۞ Il n'a jamais engendré et n'a pas été engendré non plus ۞ Et nul n'est égal à Lui. »", nombre: 3, hadith: "Celui qui les récitera (Sourate al-Ikhlâs, al-Falaq, an-Nâs) au matin et au soir, elles lui suffiront contre tout [mal]." },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِنْ شَرِّ مَا خَلَقَ ۞ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", traduction: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante ۞ contre le mal des êtres qu'Il a créés ۞ contre le mal de l'obscurité quand elle s'approfondit ۞ contre le mal de celles qui soufflent (les sorcières) sur les nœuds ۞ et contre le mal de l'envieux quand il envie. »", nombre: 3, hadith: "Celui qui les récitera (Sourate al-Ikhlâs, al-Falaq, an-Nâs) au matin et au soir, elles lui suffiront contre tout [mal]." },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۞ مَلِكِ النَّاسِ ۞ إِلَهِ النَّاسِ ۞ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞ مِنَ الْجِنَّةِ وَالنَّاسِ", traduction: "Dis : « Je cherche protection auprès du Seigneur des hommes ۞ Le Souverain des hommes ۞ Dieu des hommes ۞ contre le mal du mauvais conseiller, furtif ۞ qui souffle le mal dans les poitrines des hommes ۞ qu'il (le conseiller) soit un djinn, ou un être humain. »", nombre: 3, hadith: "Celui qui les récitera (Sourate al-Ikhlâs, al-Falaq, an-Nâs) au matin et au soir, elles lui suffiront contre tout [mal]." },
    { arabe: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَ بِكَ أَمْسَيْنَا، وَ بِكَ نَحْيَا وَ بِكَ نَمُوتُ وَ إِلَيْكَ النُّشُورُ", traduction: "Ô Allah ! C'est par Toi que nous nous retrouvons au matin et c'est par Toi que nous nous retrouvons au soir. C'est par Toi que nous vivons et c'est par Toi que nous mourons et c'est vers Toi que se fera la Résurrection.", nombre: 1, hadith: "Le Messager d'Allah ﷺ enseignait à ses Compagnons ceci : « Si l'un de vous parvient au matin qu'il dise : Ô Allah ! C'est par Toi que nous nous retrouvons au matin et c'est par Toi que nous nous retrouvons au soir… »" },
    { arabe: "أَصْبَحْنَا وَ أَصْبَحَ المُلْكُ للهِ وَ الحَمْدُ للهِ ، لاَ إلَهَ إلاَّ اللهُ وَحدَهُ لاَشَرِيكَ لَهُ، لَهُ المُلْكُ وَ لَهُ الحَمْدُ، وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا اليَوْمِ وَ خَيْرَ مَا بَعْدَهُ، وَ أَعُوذُ بِكَ مِنْ شَرِّ هَذَا اليَوْمِ وَ شَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الكَسَلِ وَ سُوءِ الكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَ عَذَابٍ فِي القَبْرِ", traduction: "Nous voilà au matin et le règne appartient à Allah. Louange à Allah, Il n'y a aucune divinité [digne d'être adorée] en dehors d'Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est capable de toute chose. Seigneur ! Je Te demande le bien que contient ce jour et le bien qui vient après. Et je cherche refuge auprès de Toi contre le mal que contient ce jour et le mal qui vient après. Seigneur ! Je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Je cherche refuge auprès de Toi contre le châtiment de l'Enfer et contre les tourments de la tombe", nombre: 1, hadith: "" },
    { arabe: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيةَ فِي الدُّنْيَا وَ الآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَ العَافِيةَ فِي دِينِي وَ دُنْيَايَ وَ أَهْلِي وَ مَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَ آمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَ مِنْ خَلْفِي وَ عَنْ يَمِينِي وَ عَنْ شِمَالِي، وَ مِنْ فَوْقِي، وَ أَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي", traduction: "Ô Allah ! Je te demande le salut dans cette vie et dans l'au-delà. Ô Allah ! Je Te demande le pardon et le salut dans ma religion, ma vie, ma famille et mes biens. Ô Allah ! Cache mes défauts et mets-moi à l'abri de toutes mes craintes. Ô Allah ! Protège-moi par devant, par derrière, sur ma droite, sur ma gauche et au-dessus de moi. Je me mets sous la protection de Ta grandeur pour ne pas être enseveli", nombre: 1, hadith: "Le Messager d'Allah ﷺ ne délaissait jamais ces invocations, arrivé au soir ou au matin : « Ô Allah ! Je te demande le salut dans cette vie et dans l'au-delà… »" },
    { arabe: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الكُفْرِ، وَ الفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ", traduction: "Ô Allah ! Préserve mon corps. Ô Allah ! Préserve mon ouïe. Ô Allah ! Préserve ma vue. Il n'y a aucune divinité [digne d'être adorée] en dehors de Toi. Ô Allah ! Je cherche refuge auprès de Toi contre la mécréance et la pauvreté. Je me mets sous Ta protection contre les tourments de la tombe. Il n'y a aucune divinité [digne d'être adorée] en dehors de Toi.", nombre: 3, hadith: "Le Prophète ﷺ disait cette invocation 3 fois le matin et 3 fois le soir. Abû Dâwûd 5090" },
    { arabe: "اللَّهُمَّ عَالِمَ الغَيْبِ وَ الشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَ الأَرْضِ رَبَّ كُلِّ شَيْءٍ وَ مَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَ مِنْ شَرِّ الشَّيْطَانِ وَ شِرْكِهِ، وَ أَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ", traduction: "Ô Allah ! Connaisseur de l'invisible et de l'apparent, Créateur des cieux et de la Terre, Seigneur et Possesseur de toute chose, j'atteste qu'il n'y a aucune divinité [digne d'être adorée] en dehors de Toi, je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et de son polythéisme et contre le fait de me faire du mal à moi-même ou d'en faire à un musulman.", nombre: 1, hadith: "Le Prophète ﷺ a dit : « Dis ceci arrivé au matin, arrivé au soir et lorsque tu rejoins ta couche. »" },
    { arabe: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَ لاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", traduction: "Ô Toi le Vivant, Celui qui n'a besoin de rien et dont toute chose dépend, j'implore secours auprès de Ta miséricorde. Améliore ma situation en tout point et ne me laisse pas à mon propre sort ne serait-ce le temps d'un clin d'œil.", nombre: 1, hadith: "Le Prophète ﷺ invoquait Allah avec cette invocation dans les moments de difficulté. Sunan Abû Dâwûd, 5090" },
    { arabe: "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلاَمِ، وَ عَلَى كَلِمَةِ الإِخْلاَصِ، وَ عَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ وَ عَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَ مَا كَانَ مِنَ المُشْرِكِينَ", traduction: "Nous voici au matin, en conformité avec la saine disposition qu'est l'Islam, avec la parole du monothéisme, avec la religion de notre Prophète Mohammed et sur la voie de notre père Ibrâhîm qui vouait un culte exclusif à Allah, soumis à Lui, et n'était point du nombre des polythéistes", nombre: 1, hadith: "Musnad Ahmad, n° 15367" },
    { arabe: "سُبْحَانَ اللهِ وَ بِحَمْدِهِ", traduction: "Gloire, pureté et louange à Allah", nombre: 100, hadith: "Le Prophète ﷺ a dit que celui qui dit « Subḥānallāhi wa biḥamdih » 100 fois matin et soir aura une œuvre immense : ses péchés seront effacés, même s'ils sont aussi nombreux que l'écume de la mer. Sahih Al-Bukhari et Muslim" },
    { arabe: "لاَ إِلَهَ إِلاَّ اللهُ، وَحْدَهُ لاَشَرِيكَ لَهُ، لَهُ المُلْكُ وَ لَهُ الحَمْدُ وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", traduction: "Il n'y a aucune divinité [digne d'être adorée] en dehors d'Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est capable de toute chose", nombre: 100, hadith: "Personne ne viendra au Jour de la Résurrection avec une œuvre meilleure que la sienne, sauf celui qui en aura fait autant ou plus" },
    { arabe: "أَسْتَغْفِرُ اللَّهَ الْعَظيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ القَيّوُمُ وَأَتُوبُ إِلَيهِ", traduction: "Je demande pardon à Allah, le Très Grand, Celui en dehors duquel il n'y a aucune divinité digne d'être adorée, Le Vivant, Celui qui subsiste par Lui-même, et je me repens à Lui", nombre: 3, hadith: "Allah lui pardonnera, même s'il a déserté les rangs de l'armée" },
    { arabe: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", traduction: "Je demande pardon à Allah et je me repens à Lui", nombre: 100, hadith: "Le Prophète ﷺ demandait pardon à Allah et se repentait à Lui plus de 70 fois par jour." },
];

const invocationsSoir = [
    { arabe: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", traduction: "J'agrée Allah comme Seigneur, l'Islam comme religion et Muhammad ﷺ comme Prophète.", nombre: 3, hadith: "Celui qui prononce cette invocation le matin avec sincérité, Allah lui garantit l'entrée au Paradis." },
    { arabe: "سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ", traduction: "Gloire et louange à Allah du nombre de Ses créatures, de Sa propre Satisfaction, de la lourdeur de Son Trône et du nombre de Ses Paroles.", nombre: 3, hadith: "Cette invocation, dite 3 fois, a une immense récompense." },
    { arabe: "بِسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَ لاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ العَلِيمُ", traduction: "Au nom d'Allah, tel qu'en compagnie de Son Nom rien sur Terre ni au ciel ne peut nuire, Lui l'Audient, l'Omniscient.", nombre: 3, hadith: "Celui qui la récitera le soir rien ne lui nuira jusqu'au matin." },
    { arabe: "أَعُوذُ بِكلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", nombre: 3, traduction: "Je me mets sous la protection des paroles parfaites d'Allah contre le mal qu'Il a créé", hadith: "Ne lui nuira pas la piqûre de toutes bêtes venimeuses au cours de cette nuit" },
    { arabe: "اللهُ لاَ إِلَهَ إِلاَّ هُوَ الحَيُّ القَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَ لاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَ مَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَ مَا خَلْفَهُمْ وَ لاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَ الأَرْضَ وَ لاَ يَئُودُهُ حِفْظُهُمَا وَ هُوَ العَلَيُّ العَظِيمُ", traduction: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui n'a besoin de rien. Ni somnolence ni sommeil ne Le saisissent.", nombre: 1, hadith: "Celui qui la récite le soir est protégé jusqu'au matin, par la permission d'Allah." },
    { arabe: "قُلْ هُوَ اللهُ أَحَدٌ ۞ اللهُ الصَّمَدُ ۞ لَمْ يَلِدْ وَلَمْ يُولَدْ ۞ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", traduction: "Dis : « Il est Allah, Unique ۞ Allah Le Seul à être imploré ۞ Il n'a jamais engendré et n'a pas été engendré non plus ۞ Et nul n'est égal à Lui. »", nombre: 3, hadith: "Elles lui suffiront contre tout [mal]." },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِنْ شَرِّ مَا خَلَقَ ۞ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", traduction: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante ۞ contre le mal des êtres qu'Il a créés… »", nombre: 3, hadith: "Elles lui suffiront contre tout [mal]." },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۞ مَلِكِ النَّاسِ ۞ إِلَهِ النَّاسِ ۞ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞ مِنَ الْجِنَّةِ وَالنَّاسِ", traduction: "Dis : « Je cherche protection auprès du Seigneur des hommes… »", nombre: 3, hadith: "Elles lui suffiront contre tout [mal]." },
    { arabe: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَ بِكَ أَصْبَحْنَا، وَ بِكَ نَحْيَا، وَ بِكَ نَمُوتُ وَ إِلَيْكَ المَصِيرُ", traduction: "Ô Allah ! C'est par Toi que nous nous retrouvons au soir et c'est par Toi que nous nous retrouvons au matin. C'est par Toi que nous vivons et c'est par Toi que nous mourons et c'est vers Toi que sera notre destinée", nombre: 1, hadith: "" },
    { arabe: "أَمْسَيْنَا وَ أَمْسَى المُلْكُ للهِ وَ الحَمْدُ للهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحدَهُ لاَشَرِيكَ لَهُ، لَهُ المُلْكُ وَ لَهُ الحَمْدُ، وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيلَةِ وَ خَيرَ مَا بَعْدَهَا، وَ أَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ اللَّيلَةِ وَ شَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الكَسَلِ وَ سُوءِ الكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَ عَذَابٍ فِي القَبْرِ", traduction: "Nous voilà au soir et le règne appartient à Allah. Louange à Allah… Seigneur ! Je Te demande le bien que contient cette nuit.", nombre: 1, hadith: "" },
    { arabe: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيةَ فِي الدُّنْيَا وَ الآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَ العَافِيةَ فِي دِينِي وَ دُنْيَايَ وَ أَهْلِي وَ مَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَ آمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَ مِنْ خَلْفِي وَ عَنْ يَمِينِي وَ عَنْ شِمَالِي، وَ مِنْ فَوْقِي، وَ أَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي", traduction: "Ô Allah ! Je te demande le salut dans cette vie et dans l'au-delà.", nombre: 1, hadith: "" },
    { arabe: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الكُفْرِ، وَ الفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ", traduction: "Ô Allah ! Préserve mon corps, mon ouïe et ma vue.", nombre: 3, hadith: "Abû Dâwûd 5090" },
    { arabe: "اللَّهُمَّ عَالِمَ الغَيْبِ وَ الشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَ الأَرْضِ رَبَّ كُلِّ شَيْءٍ وَ مَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَ مِنْ شَرِّ الشَّيْطَانِ وَ شِرْكِهِ، وَ أَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ", traduction: "Ô Allah ! Connaisseur de l'invisible et de l'apparent…", nombre: 1, hadith: "« Dis ceci arrivé au matin, arrivé au soir et lorsque tu rejoins ta couche. »" },
    { arabe: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَ لاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", traduction: "Ô Toi le Vivant, j'implore secours auprès de Ta miséricorde.", nombre: 1, hadith: "Sunan Abû Dâwûd, 5090" },
    { arabe: "أَمْسَيْنَا وَ أَمْسَى المُلْكُ للهِ رَبِّ العَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيلَةِ، فَتْحَهَا، وَ نَصْرَهَا، وَ نُورَهَا وَ بَرَكَتَهَا، وَ هُدَاهَا، وَ أَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَ شَرِّ مَا بَعْدَهَا", traduction: "Nous voilà au soir et la Royauté appartient à Allah, le Seigneur de l'Univers.", nombre: 1, hadith: "Musnad Ahmad, n° 15367" },
    { arabe: "سُبْحَانَ اللهِ وَ بِحَمْدِهِ", traduction: "Gloire, pureté et louange à Allah", nombre: 100, hadith: "Sahih Al-Bukhari et Muslim" },
    { arabe: "لاَ إِلَهَ إِلاَّ اللهُ، وَحْدَهُ لاَشَرِيكَ لَهُ، لَهُ المُلْكُ وَ لَهُ الحَمْدُ وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", traduction: "Il n'y a aucune divinité en dehors d'Allah, Seul, sans associé.", nombre: 100, hadith: "" },
    { arabe: "أَسْتَغْفِرُ اللَّهَ الْعَظيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ القَيّوُمُ وَأَتُوبُ إِلَيهِ", traduction: "Je demande pardon à Allah, le Très Grand.", nombre: 3, hadith: "" },
    { arabe: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", traduction: "Je demande pardon à Allah et je me repens à Lui", nombre: 100, hadith: "" },
];

const invocationsNuit = [
    { arabe: "سُبْحَانَ اللهِ", traduction: "Gloire et pureté à Allah", nombre: 33, hadith: "Un dhikr précieux recommandé par le Prophète ﷺ, apportant paix au cœur et grande récompense auprès d'Allah." },
    { arabe: "الحَمْدُ للهِ", traduction: "louange à Allah", nombre: 33, hadith: "Un dhikr précieux recommandé par le Prophète ﷺ." },
    { arabe: "اللهُ أَكْبَرُ", traduction: "Allah est le Plus Grand", nombre: 34, hadith: "Un dhikr précieux recommandé par le Prophète ﷺ." },
    { arabe: "لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَشَرِيكَ لَهُ، لَهُ المُلْكُ وَ لَهُ الحَمْدُ، وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَ لاَ حَوْلَ وَ لاَ قُوَّةَ إِلاَّ بِاللهِ. سُبْحَانَ اللهِ، وَ الحَمْدُ للهِ، وَ لاَ إِلَهَ إِلاَّ اللهُ، وَ اللهُ أَكْبَرُ", traduction: "Il n'y a aucune divinité en dehors d'Allah, Seul sans associé. À Lui la royauté et la louange.", nombre: 1, hadith: "Une invocation à dire la nuit avant de dormir afin que tes péchés soient pardonnés même s'ils étaient aussi nombreux que l'écume de la mer" },
    { arabe: "اللهُ لاَ إِلَهَ إِلاَّ هُوَ الحَيُّ القَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَ لاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَ مَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَ مَا خَلْفَهُمْ وَ لاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَ الأَرْضَ وَ لاَ يَئُودُهُ حِفْظُهُمَا وَ هُوَ العَلَيُّ العَظِيمُ", traduction: "Allah ! Point de divinité à part Lui, le Vivant.", nombre: 1, hadith: "Celui qui récite Ayat al-Kursî avant de dormir est protégé par Allah, et aucun démon ne s'approche de lui jusqu'au matin" },
    { arabe: "قُلْ هُوَ اللهُ أَحَدٌ ۞ اللهُ الصَّمَدُ ۞ لَمْ يَلِدْ وَلَمْ يُولَدْ ۞ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", traduction: "Dis : « Il est Allah, Unique… »", nombre: 3, hadith: "Le Prophète ﷺ récitait Al-Ikhlâs, Al-Falaq et An-Nâs trois fois avant de dormir. Sahih Al-Bukhari" },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِنْ شَرِّ مَا خَلَقَ ۞ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", traduction: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante… »", nombre: 3, hadith: "Sahih Al-Bukhari" },
    { arabe: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۞ مَلِكِ النَّاسِ ۞ إِلَهِ النَّاسِ ۞ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞ مِنَ الْجِنَّةِ وَالنَّاسِ", traduction: "Dis : « Je cherche protection auprès du Seigneur des hommes… »", nombre: 3, hadith: "Sahih Al-Bukhari" },
    { arabe: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَ بِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَ إِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ", traduction: "C'est en Ton nom, Seigneur que je me couche, et en Ton nom que je me lève.", nombre: 1, hadith: "« Lorsque l'un de vous rejoint sa couche… qu'il dise : C'est en Ton nom, Seigneur que je me couche… »" },
];

const invocationsReveil = [
    { arabe: "اَلحَمدُ لِلهِ الَّذِي أحيَانَا بَعْدَ مَا أمَاتَنَا وَ إِلَيهِ النُّشُورُ", traduction: "Louange à Allah qui nous a rendus à la vie après nous avoir fait mourir, et tout retourne à Lui.", nombre: 1, hadith: "D'après Hudhaifa, lorsque le Prophète ﷺ se levait, il disait cette invocation." },
    { arabe: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الحَمدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللهِ، وَالحَمدُ للهِ، وَلَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي", traduction: "Il n'y a d'autre divinité qu'Allâh l'Unique sans associé, à Lui la royauté et la louange.", nombre: 1, hadith: "Celui qui se réveille pendant la nuit et prononce ce dhikr, puis invoque Allah, son invocation sera exaucée. Sahih al-Bukhari, n°1154" },
    { arabe: "الحَمدُ للهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ", traduction: "Louange à Allah qui m'a rendu la vie, m'a préservé dans ma santé et m'a permis de Le mentionner.", nombre: 1, hadith: "Une reconnaissance envers Allah au réveil." },
];

/* ============ CATÉGORIES ============ */
const categories = {
    matin:  { liste: invocations,       label: "Matin",  ecran: adhkarsMatin,  conteneur: document.getElementById("listeMatin"),  boutonDebut: m1, retourBtn: retour  },
    soir:   { liste: invocationsSoir,   label: "Soir",   ecran: adhkarssoir,   conteneur: document.getElementById("listeSoir"),   boutonDebut: m2, retourBtn: retour2 },
    nuit:   { liste: invocationsNuit,   label: "Nuit",   ecran: adhkarsNuit,   conteneur: document.getElementById("listeNuit"),   boutonDebut: m3, retourBtn: retour3 },
    reveil: { liste: invocationsReveil, label: "Réveil", ecran: adhkarsReveil, conteneur: document.getElementById("listeReveil"), boutonDebut: m4, retourBtn: retour4 },
};

/* ============ FAVORIS (persistants via localStorage) ============ */
const CLE_FAVORIS = "adhkar_favoris";

function getFavoris() {
    try {
        const data = localStorage.getItem(CLE_FAVORIS);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}
function saveFavoris(arr) {
    localStorage.setItem(CLE_FAVORIS, JSON.stringify(arr));
}
function isFavori(id) {
    return getFavoris().includes(id);
}
function toggleFavori(id) {
    let favs = getFavoris();
    if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
    } else {
        favs.push(id);
    }
    saveFavoris(favs);
    return isFavori(id);
}
function getInvocationParId(id) {
    const [cle, idxStr] = id.split("-");
    const idx = parseInt(idxStr, 10);
    const cat = categories[cle];
    if (!cat || !cat.liste[idx]) return null;
    return { item: cat.liste[idx], label: cat.label };
}

/* ============ RENDU DES CARTES ============ */
function carteHTML(item, id) {
    const rempli = isFavori(id) ? "fa-solid" : "fa-regular";
    return `
    <div class="card-tap bg-gray-50 hover:bg-blue-400 p-5 rounded-2xl soft-shadow" data-id="${id}">
        <div class="flex items-start justify-between gap-3">
            <h1 class="arabic font-bold text-blue-900 text-lg flex-1">${item.arabe}</h1>
            <i class="${rempli} fa-heart text-red-500 text-lg mt-1 favBtn" data-id="${id}"></i>
        </div>
        <div class="inline-block bg-blue-800 text-white font-bold text-sm px-3 py-1 rounded-full mt-3">${item.nombre}x</div>
        <p class="text-sm text-gray-700 mt-2 leading-relaxed">${item.traduction}</p>
    </div>`;
}

function rendreCategorie(cle) {
    const cat = categories[cle];
    cat.conteneur.innerHTML = cat.liste.map((item, idx) => carteHTML(item, `${cle}-${idx}`)).join("");
}
Object.keys(categories).forEach(rendreCategorie);

/* ============ DÉLÉGATION CLIC SUR LES CŒURS (favBtn) ============ */
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".favBtn");
    if (!btn) return;
    const id = btn.dataset.id;
    const estFavori = toggleFavori(id);

    document.querySelectorAll(`.favBtn[data-id="${CSS.escape(id)}"]`).forEach(icon => {
        icon.classList.toggle("fa-solid", estFavori);
        icon.classList.toggle("fa-regular", !estFavori);
    });

    if (!estFavori) {
        document.querySelectorAll(`#listeFavoris [data-id="${CSS.escape(id)}"]`).forEach(carte => carte.remove());
        majEtatVideFavoris();
    }

    if (id === currentId) {
        heartChapelet.classList.toggle("fa-solid", estFavori);
        heartChapelet.classList.toggle("fa-regular", !estFavori);
    }
});

/* ============ NAVIGATION CENTRALISÉE ============ */
const tousLesEcrans = [accuiel, adhkarsMatin, adhkarssoir, adhkarsNuit, adhkarsReveil, chapelet, favoris, recherche, parametres];

function afficherEcran(ecran) {
    tousLesEcrans.forEach(e => e.classList.add("hidden"));
    ecran.classList.remove("hidden");
    menu.classList.add("hidden");
}

menubtn.addEventListener("click", () => menu.classList.toggle("hidden"));

matin.addEventListener("click", () => afficherEcran(adhkarsMatin));
soir.addEventListener("click", () => afficherEcran(adhkarssoir));
nuit.addEventListener("click", () => afficherEcran(adhkarsNuit));
reveil.addEventListener("click", () => afficherEcran(adhkarsReveil));

retour.addEventListener("click", () => afficherEcran(accuiel));
retour2.addEventListener("click", () => afficherEcran(accuiel));
retour3.addEventListener("click", () => afficherEcran(accuiel));
retour4.addEventListener("click", () => afficherEcran(accuiel));

navAccueil.addEventListener("click", () => afficherEcran(accuiel));
navFavoris.addEventListener("click", () => { rendreFavoris(); afficherEcran(favoris); });
navRecherche.addEventListener("click", () => afficherEcran(recherche));
navParametres.addEventListener("click", () => afficherEcran(parametres));

menuAccueil.addEventListener("click", () => afficherEcran(accuiel));
menuFavoris.addEventListener("click", () => { rendreFavoris(); afficherEcran(favoris); });
menuRecherche.addEventListener("click", () => afficherEcran(recherche));
menuParametres.addEventListener("click", () => afficherEcran(parametres));

retourFavoris.addEventListener("click", () => afficherEcran(accuiel));
retourRecherche.addEventListener("click", () => afficherEcran(accuiel));
retourParametres.addEventListener("click", () => afficherEcran(accuiel));

/* ============ CHAPELET / COMPTEUR ============ */
let compteur = 0;
let index = 0;
let listeActuelle = invocations;
let categorieActuelle = "matin";
let currentId = "matin-0";
let ecranOrigine = adhkarsMatin;

function afficherInvocation() {
    const invocation = listeActuelle[index];
    currentId = `${categorieActuelle}-${index}`;

    document.getElementById("arabe").textContent = invocation.arabe;
    document.getElementById("traduction").textContent = invocation.traduction;
    document.getElementById("val").textContent = invocation.nombre;
    document.getElementById("hadit").textContent = invocation.hadith;

    const estFavori = isFavori(currentId);
    heartChapelet.classList.toggle("fa-solid", estFavori);
    heartChapelet.classList.toggle("fa-regular", !estFavori);

    compteur = 0;
    cpt.textContent = compteur;
}

function demarrerCategorie(cle) {
    const cat = categories[cle];
    categorieActuelle = cle;
    listeActuelle = cat.liste;
    ecranOrigine = cat.ecran;
    index = 0;
    afficherInvocation();
    afficherEcran(chapelet);
}

m1.addEventListener("click", () => demarrerCategorie("matin"));
m2.addEventListener("click", () => demarrerCategorie("soir"));
m3.addEventListener("click", () => demarrerCategorie("nuit"));
m4.addEventListener("click", () => demarrerCategorie("reveil"));

retour1.addEventListener("click", () => afficherEcran(ecranOrigine));

plus.addEventListener("click", () => {
    if (compteur < listeActuelle[index].nombre) {
        compteur++;
        cpt.textContent = compteur;
    }
    if (compteur === listeActuelle[index].nombre) {
        index++;
        if (index < listeActuelle.length) {
            afficherInvocation();
        } else {
            alert("Tous les adhkar sont terminés !");
            index = 0;
            afficherEcran(accuiel);
        }
    }
});

moins.addEventListener("click", () => {
    if (compteur > 0) {
        compteur--;
        cpt.textContent = compteur;
    }
});

heartChapelet.addEventListener("click", () => {
    const estFavori = toggleFavori(currentId);
    heartChapelet.classList.toggle("fa-solid", estFavori);
    heartChapelet.classList.toggle("fa-regular", !estFavori);
    document.querySelectorAll(`.favBtn[data-id="${CSS.escape(currentId)}"]`).forEach(icon => {
        icon.classList.toggle("fa-solid", estFavori);
        icon.classList.toggle("fa-regular", !estFavori);
    });
});

shareChapelet.addEventListener("click", async () => {
    const invocation = listeActuelle[index];
    const texte = `${invocation.arabe}\n\n${invocation.traduction}`;
    if (navigator.share) {
        try {
            await navigator.share({ title: "ADHKAR", text: texte });
        } catch (e) {
            /* partage annulé par l'utilisateur, rien à faire */
        }
    } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(texte);
        alert("Invocation copiée dans le presse-papier.");
    }
});

/* ============ FAVORIS (page) ============ */
function majEtatVideFavoris() {
    const vide = listeFavoris.children.length === 0;
    favorisVide.classList.toggle("hidden", !vide);
}

function rendreFavoris() {
    const favs = getFavoris();
    listeFavoris.innerHTML = favs
        .map(id => {
            const trouve = getInvocationParId(id);
            return trouve ? carteHTML(trouve.item, id) : "";
        })
        .join("");
    majEtatVideFavoris();
}

btnResetFavoris.addEventListener("click", () => {
    if (getFavoris().length === 0) return;
    if (confirm("Supprimer tous les favoris ?")) {
        saveFavoris([]);
        rendreFavoris();
        Object.keys(categories).forEach(rendreCategorie);
    }
});

/* ============ RECHERCHE ============ */
function normaliser(txt) {
    return (txt || "").toLowerCase();
}

inputRecherche.addEventListener("input", () => {
    const q = normaliser(inputRecherche.value.trim());
    if (!q) {
        resultatsRecherche.innerHTML = "";
        rechercheVide.classList.add("hidden");
        return;
    }

    const resultats = [];
    Object.keys(categories).forEach(cle => {
        categories[cle].liste.forEach((item, idx) => {
            const cible = normaliser(item.traduction) + " " + normaliser(item.hadith) + " " + item.arabe;
            if (cible.includes(q) || item.arabe.includes(inputRecherche.value.trim())) {
                resultats.push({ id: `${cle}-${idx}`, item });
            }
        });
    });

    resultatsRecherche.innerHTML = resultats.map(r => carteHTML(r.item, r.id)).join("");
    rechercheVide.classList.toggle("hidden", resultats.length > 0);
});

/* ============ PARAMÈTRES ============ */
const CLE_TAILLE = "adhkar_taille_texte";
const tailleBtns = document.querySelectorAll(".tailleBtn");

function appliquerTaille(taille) {
    document.body.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    document.body.classList.add(`text-size-${taille}`);
    tailleBtns.forEach(b => b.classList.toggle("active", b.dataset.taille === taille));
    localStorage.setItem(CLE_TAILLE, taille);
}

tailleBtns.forEach(btn => {
    btn.addEventListener("click", () => appliquerTaille(btn.dataset.taille));
});

appliquerTaille(localStorage.getItem(CLE_TAILLE) || "medium");