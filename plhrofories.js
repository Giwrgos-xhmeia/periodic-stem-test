
function makestoixeioplhr(tsex, typos) {
    if(tsex == "Iron") {
        if(typos==0){
            return(`            <li>Ο σίδηρος είναι ένα μέταλλο με χημικό σύμβολο Fe και ατομικό αριθμό 26. Είναι ένα από τα πιο άφθονα μέταλλα στη Γη και βασικό συστατικό του χάλυβα.</li>
                <li>Ο σίδηρος είναι απαραίτητος για τη ζωή, καθώς αποτελεί βασικό στοιχείο της αιμοσφαιρίνης, της πρωτεΐνης που μεταφέρει οξυγόνο στο αίμα.</li>
                <li>Ο σίδηρος χρησιμοποιείται από την αρχαιότητα, με τους πρώτους πολιτισμούς να τον αξιοποιούν για την κατασκευή εργαλείων και όπλων, σηματοδοτώντας την Εποχή του Σιδήρου.</li>`)
        }
        else{
            return("Σίδηρος")
        }
    }
    if(tsex == "Lithium") {
        if(typos==0){
            return(`            <li>Το λίθιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Li και ατομικό αριθμό 3. Είναι το ελαφρύτερο μέταλλο και αντιδρά έντονα με το νερό.</li>
                <li>Το λίθιο χρησιμοποιείται σε μπαταρίες ιόντων λιθίου, που τροφοδοτούν κινητά τηλέφωνα, φορητούς υπολογιστές και ηλεκτρικά οχήματα.</li>
                <li>Ανακαλύφθηκε το 1817 από τον Σουηδό χημικό Γιόχαν Αρφβέντσον, ενώ μερικές από τις μεγαλύτερες φυσικές αποθέσεις του βρίσκονται στη Νότια Αμερική.</li>`)
        }
        else{
            return("Λίθιο")
        }
    }
    
    if(tsex == "Oxygen") {
        if(typos==0){
            return(`            <li>Το οξυγόνο είναι ένα αέριο στοιχείο με χημικό σύμβολο O και ατομικό αριθμό 8. Είναι απαραίτητο για τη ζωή, καθώς χρησιμοποιείται στην αναπνοή των οργανισμών.</li>
                <li>Αποτελεί περίπου το 21% της ατμόσφαιρας της Γης και είναι βασικό συστατικό του νερού (H₂O) και πολλών άλλων χημικών ενώσεων.</li>
                <li>Το οξυγόνο ανακαλύφθηκε ανεξάρτητα από τον Σουηδό Καρλ Σέελε το 1772 και τον Άγγλο Τζόζεφ Πρίστλεϊ το 1774, και αργότερα ο Αντουάν Λαβουαζιέ του έδωσε το όνομα "οξυγόνο".</li>`)
        }
        else{
            return("Οξυγόνο")
        }
    }
    
    if(tsex == "Sodium") {
        if(typos==0){
            return(`            <li>Το νάτριο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Na και ατομικό αριθμό 11. Είναι μαλακό, ασημί και αντιδρά έντονα με το νερό.</li>
                <li>Το νάτριο είναι απαραίτητο για τη ζωή, καθώς βοηθά στη ρύθμιση της αρτηριακής πίεσης και στη μετάδοση των νευρικών σημάτων.</li>
                <li>Ανακαλύφθηκε από τον Άγγλο χημικό Χάμφρι Ντέιβι το 1807 μέσω ηλεκτρόλυσης, και είναι κύριο συστατικό του επιτραπέζιου αλατιού (NaCl).</li>`)
        }
        else{
            return("Νάτριο")
        }
    }
    if(tsex == "Potassium") {
        if(typos==0){
            return(`            <li>Το κάλιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο K και ατομικό αριθμό 19. Είναι απαραίτητο για τη λειτουργία των κυττάρων και των μυών.</li>
                <li>Το κάλιο παίζει σημαντικό ρόλο στη ρύθμιση της ισορροπίας των υγρών στο σώμα και στη μετάδοση των νευρικών σημάτων.</li>
                <li>Ανακαλύφθηκε από τον Άγγλο χημικό Χάμφρι Ντέιβι το 1807 μέσω ηλεκτρόλυσης της ποτάσσας (K₂CO₃), και είναι ένα από τα πιο άφθονα στοιχεία στη φύση.</li>`)
        }
        else{
            return("Κάλιο")
        }
    }
    
    if(tsex == "Chlorine") {
        if(typos==0){
            return(`            <li>Το χλώριο είναι ένα αλογόνο με χημικό σύμβολο Cl και ατομικό αριθμό 17. Είναι ένα κίτρινο-πράσινο αέριο με έντονη οσμή.</li>
                <li>Χρησιμοποιείται ευρέως στην απολύμανση του νερού, στις πισίνες και στην παραγωγή λευκαντικών και πλαστικών όπως το PVC.</li>
                <li>Το χλώριο ανακαλύφθηκε το 1774 από τον Σουηδό χημικό Καρλ Βίλχελμ Σέελε, αλλά το 1810 ο σερ Χάμφρι Ντέιβι απέδειξε ότι είναι στοιχείο.</li>`)
        }
        else{
            return("Χλώριο")
        }
    }
    
    if(tsex == "Magnesium") {
        if(typos==0){
            return(`            <li>Το μαγνήσιο είναι ένα αλκαλικογήινο μέταλλο με χημικό σύμβολο Mg και ατομικό αριθμό 12. Είναι ελαφρύ, ανθεκτικό και χρησιμοποιείται σε κράματα.</li>
                <li>Το μαγνήσιο είναι ζωτικής σημασίας για τον ανθρώπινο οργανισμό, καθώς συμμετέχει στη λειτουργία των μυών, των νεύρων και στην παραγωγή ενέργειας.</li>
                <li>Ανακαλύφθηκε το 1755 από τον Σκωτσέζο χημικό Τζόζεφ Μπλάκ και απομονώθηκε ως καθαρό μέταλλο το 1808 από τον Χάμφρι Ντέιβι μέσω ηλεκτρόλυσης.</li>`)
        }
        else{
            return("Μαγνήσιο")
        }
    }
    if(tsex == "Phosphorus") {
        if(typos==0){
            return(`            <li>Ο φώσφορος είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο P και ατομικό αριθμό 15. Είναι απαραίτητος για τη ζωή, καθώς αποτελεί βασικό συστατικό του DNA και της ATP.</li>
                <li>Ο φώσφορος υπάρχει σε διάφορες μορφές, όπως ο λευκός, ο κόκκινος και ο μαύρος φώσφορος, με τον λευκό να είναι εξαιρετικά εύφλεκτος.</li>
                <li>Ανακαλύφθηκε το 1669 από τον Γερμανό αλχημιστή Χένιγκ Μπραντ, ο οποίος το εξήγαγε από ανθρώπινα ούρα σε μια προσπάθεια να βρει τη φιλοσοφική λίθο.</li>`)
        }
        else{
            return("Φώσφορος")
        }
    }
    
    if(tsex == "Helium") {
        if(typos==0){
            return(`            <li>Το ήλιο είναι ένα ευγενές αέριο με χημικό σύμβολο He και ατομικό αριθμό 2. Είναι το δεύτερο ελαφρύτερο στοιχείο και το δεύτερο πιο άφθονο στο σύμπαν.</li>
                <li>Χρησιμοποιείται σε μπαλόνια, αερόστατα και στη βιομηχανία κρυογονικής, καθώς έχει το χαμηλότερο σημείο βρασμού από όλα τα στοιχεία.</li>
                <li>Το ήλιο ανακαλύφθηκε το 1868 από τον Πιέρ Ζανσέν κατά τη διάρκεια μιας ηλιακής έκλειψης, όταν εντόπισε μια άγνωστη γραμμή στο ηλιακό φάσμα.</li>`)
        }
        else{
            return("Ηλιο")
        }
    }
    
    if(tsex == "Aluminium") {
        if(typos==0){
            return(`            <li>Το αλουμίνιο είναι ένα ελαφρύ μέταλλο με χημικό σύμβολο Al και ατομικό αριθμό 13. Είναι γνωστό για την αντοχή του στη διάβρωση και τη χρήση του σε κατασκευές.</li>
                <li>Είναι το πιο άφθονο μέταλλο στον φλοιό της Γης και χρησιμοποιείται ευρέως σε αεροσκάφη, αυτοκίνητα και συσκευασίες, όπως τα αλουμινένια κουτάκια.</li>
                <li>Απομονώθηκε για πρώτη φορά το 1825 από τον Δανό φυσικό Χανς Κρίστιαν Έρστεντ, αλλά η βιομηχανική παραγωγή του έγινε εφικτή στα τέλη του 19ου αιώνα.</li>`)
        }
        else{
            return("Αλουμίνιο")
        }
    }
    
    if(tsex == "Sulfur") {
        if(typos==0){
            return(`            <li>Το θείο είναι ένα μη μέταλλο με χημικό σύμβολο S και ατομικό αριθμό 16. Είναι κίτρινο στερεό και συναντάται φυσικά σε ηφαιστειακές περιοχές.</li>
                <li>Το θείο χρησιμοποιείται στην παραγωγή λιπασμάτων, πυρίτιδας και καουτσούκ, καθώς και στην επεξεργασία πετρελαίου.</li>
                <li>Γνωστό από την αρχαιότητα, το θείο αναφερόταν ως «θειάφι» και χρησιμοποιήθηκε σε θρησκευτικές τελετές και στην παρασκευή φαρμάκων.</li>`)
        }
        else{
            return("Θείο")
        }
    }
    if(tsex == "Nitrogen") {
        if(typos==0){
            return(`            <li>Το άζωτο είναι ένα αέριο στοιχείο με χημικό σύμβολο N και ατομικό αριθμό 7. Αποτελεί περίπου το 78% της ατμόσφαιρας της Γης.</li>
                <li>Το άζωτο είναι απαραίτητο για τη ζωή, καθώς αποτελεί βασικό συστατικό των αμινοξέων, των πρωτεϊνών και του DNA.</li>
                <li>Ανακαλύφθηκε το 1772 από τον Σκωτσέζο χημικό Ντάνιελ Ράδερφορντ, ο οποίος το ονόμασε "καπνώδες αέρα" επειδή δεν υποστήριζε την καύση.</li>`)
        }
        else{
            return("Άζωτο")
        }
    }
    
    if(tsex == "Carbon") {
        if(typos==0){
            return(`            <li>Ο άνθρακας είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο C και ατομικό αριθμό 6. Είναι το θεμελιώδες στοιχείο της ζωής, καθώς αποτελεί τη βάση όλων των οργανικών ενώσεων.</li>
                <li>Υπάρχει σε διάφορες μορφές, όπως ο γραφίτης, το διαμάντι και ο άνθρακας, και χρησιμοποιείται ευρέως στη βιομηχανία και την τεχνολογία.</li>
                <li>Ο άνθρακας είναι γνωστός από την αρχαιότητα και το όνομά του προέρχεται από τη λατινική λέξη "carbo", που σημαίνει κάρβουνο.</li>`)
        }
        else{
            return("Άνθρακας")
        }
    }
    
    if(tsex == "fluorine") {
        if(typos==0){
            return(`            <li>Το φθόριο είναι ένα αλογόνο με χημικό σύμβολο F και ατομικό αριθμό 9. Είναι το πιο ηλεκτραρνητικό στοιχείο και ένα από τα πιο δραστικά χημικά στοιχεία.</li>
                <li>Χρησιμοποιείται στην παρασκευή τεφλόν, στα φθοριούχα προϊόντα για την προστασία των δοντιών και στην επεξεργασία εμπλουσμένου ουρανίου.</li>
                <li>Απομονώθηκε το 1886 από τον Γάλλο χημικό Ανρί Μουασάν, ο οποίος κέρδισε το Νόμπελ Χημείας το 1906 για την εργασία του.</li>`)
        }
        else{
            return("Φθόριο")
        }
    }
    if(tsex == "Rubidium") {
        if(typos==0){
            return(`            <li>Το ρουβίδιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Rb και ατομικό αριθμό 37. Είναι ένα μαλακό, ασημί-λευκό μέταλλο που αντιδρά γρήγορα με το νερό.</li>
                <li>Το ρουβίδιο χρησιμοποιείται σε ειδικές εφαρμογές, όπως στην πυρηνική έρευνα και στην κατασκευή αλκαλικών μπαταριών.</li>
                <li>Ανακαλύφθηκε το 1861 από τους Γερμανούς χημικούς Γκούσταβ Κίρκχοφ και Ρόμπερτ Βάιν, που το ονόμασαν από τη χαρακτηριστική κόκκινη γραμμή του φάσματος.</li>`)
        }
        else{
            return("Ρουβίδιο")
        }
    }
    
    if(tsex == "Caesium") {
        if(typos==0){
            return(`            <li>Το καίσιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Cs και ατομικό αριθμό 55. Είναι το πρώτο αλκαλικό μέταλλο που ανακαλύφθηκε να έχει εφαρμογές στην πυρηνική τεχνολογία.</li>
                <li>Το καίσιο χρησιμοποιείται σε ατομικούς ρολόγια και στη μέτρηση του χρόνου, καθώς διαθέτει την πιο ακριβή και σταθερή συχνότητα από όλα τα στοιχεία.</li>
                <li>Ανακαλύφθηκε το 1860 από τους Γερμανούς χημικούς Γκούσταβ Κίρκχοφ και Ρόμπερτ Βάιν, με την ονομασία του να προέρχεται από την μπλε-πράσινη γραμμή στο φάσμα του.</li>`)
        }
        else{
            return("Καίσιο")
        }
    }
    
    if(tsex == "Francium") {
        if(typos==0){
            return(`            <li>Το φράνκιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Fr και ατομικό αριθμό 87. Είναι το πιο σπάνιο από τα αλκαλικά μέταλλα και το πιο ραδιενεργό από όλα τα στοιχεία.</li>
                <li>Το φράνκιο παράγεται σε πολύ μικρές ποσότητες και έχει εφαρμογές στη μελέτη της πυρηνικής φυσικής και στη χημεία της ραδιενέργειας.</li>
                <li>Ανακαλύφθηκε το 1939 από τους Γάλλους χημικούς Μπενζέ και Οσμάν, και το όνομά του προέρχεται από τη Γαλλία, τη χώρα όπου ανακαλύφθηκε.</li>`)
        }
        else{
            return("Φράνκιο")
        }
    }
    if(tsex == "Radium") {
        if(typos==0){
            return(`            <li>Το ράδιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο Ra και ατομικό αριθμό 88. Είναι γνωστό για την έντονη ραδιενέργεια του και τη χρήση του σε ιατρικές θεραπείες στο παρελθόν.</li>
                <li>Το ράδιο είναι εξαιρετικά επικίνδυνο λόγω της ακτινοβολίας του και σήμερα χρησιμοποιείται κυρίως για ερευνητικούς σκοπούς και στην πυρηνική φυσική.</li>
                <li>Ανακαλύφθηκε το 1898 από τη Μαρί και τον Πιερ Κιουρί, οι οποίοι το ονόμασαν από τη λέξη "ράδιο", που σημαίνει "ακτινοβολία".</li>`)
        }
        else{
            return("Ράδιο")
        }
    }
    
    if(tsex == "Boron") {
        if(typos==0){
            return(`            <li>Το βόριο είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο B και ατομικό αριθμό 5. Χρησιμοποιείται σε βιομηχανικές εφαρμογές και σε αντιδραστήρες πυρηνικής ενέργειας.</li>
                <li>Το βόριο χρησιμοποιείται στη βιομηχανία της γυαλίσεως, καθώς και στην κατασκευή ελαφρών και ανθεκτικών υλικών, όπως το αλεξίσφαιρο γυαλί.</li>
                <li>Ανακαλύφθηκε το 1808 από τον Σουηδό χημικό Γιοχάνς Άλβιν, και το όνομά του προέρχεται από την αραβική λέξη "buraq", που σημαίνει "ορυχείο".</li>`)
        }
        else{
            return("Βόριο")
        }
    }
    
    if(tsex == "Silicon") {
        if(typos==0){
            return(`            <li>Ο πυρίτιο είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο Si και ατομικό αριθμό 14. Είναι το δεύτερο πιο άφθονο στοιχείο στη Γη και χρησιμοποιείται ευρέως στη βιομηχανία των ηλεκτρονικών.</li>
                <li>Ο πυρίτιο είναι βασικό συστατικό στα ημιαγωγά, που χρησιμοποιούνται για την κατασκευή μικροτσίπ, τα οποία είναι θεμελιώδη για υπολογιστές και κινητά τηλέφωνα.</li>
                <li>Ανακαλύφθηκε το 1824 από τον Σουηδό χημικό Φρίντριχ Βίλχελμ, και το όνομά του προέρχεται από τη λατινική λέξη "silex", που σημαίνει πέτρα ή βράχος.</li>`)
        }
        else{
            return("Πυρίτιο")
        }
    }
    if(tsex == "Neon") {
        if(typos==0){
            return(`            <li>Το νέον είναι ένα ευγενές αέριο με χημικό σύμβολο Ne και ατομικό αριθμό 10. Είναι γνωστό για τη φωτεινότητά του και τη χρήση του σε νέον φωτισμό, όπως τα φώτα νέον στις πινακίδες.</li>
                <li>Το νέον χρησιμοποιείται σε φωτεινές διαφημίσεις, χρωματιστούς φωτισμούς και άλλα διακοσμητικά στοιχεία, καθώς όταν ενισχύεται με ηλεκτρισμό, εκπέμπει έντονο κόκκινο-πορτοκαλί φως.</li>
                <li>Ανακαλύφθηκε το 1898 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, οι οποίοι το εντόπισαν στα αέρια του αέρα, μετά την απομάκρυνση των αερίων του οξυγόνου και του αζώτου.</li>`)
        }
        else{
            return("Νέον")
        }
    }
    
    if(tsex == "Argon") {
        if(typos==0){
            return(`            <li>Ο αργόνος είναι ένα ευγενές αέριο με χημικό σύμβολο Ar και ατομικό αριθμό 18. Είναι το τρίτο πιο άφθονο αέριο στην ατμόσφαιρα και χρησιμοποιείται κυρίως για να δημιουργεί αδρανές περιβάλλον.</li>
                <li>Ο αργόνος χρησιμοποιείται σε λαμπτήρες φωτισμού, σε συγκολλήσεις και σε διάφορες βιομηχανικές διαδικασίες, καθώς είναι αδρανές και δεν αντιδρά με άλλες ουσίες.</li>
                <li>Ανακαλύφθηκε το 1894 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, κατά τη διάρκεια μελέτης των αερίων που παραμένουν μετά την απομάκρυνση του οξυγόνου και του αζώτου από τον αέρα.</li>`)
        }
        else{
            return("Αργόνος")
        }
    }
    
    if(tsex == "Krypton") {
        if(typos==0){
            return(`            <li>Το κρυπτόν είναι ένα ευγενές αέριο με χημικό σύμβολο Kr και ατομικό αριθμό 36. Είναι σπάνιο στην ατμόσφαιρα και χρησιμοποιείται σε φώτα και λέιζερ.</li>
                <li>Το κρυπτόν χρησιμοποιείται σε φώτα φθορισμού και σε ειδικές λάμπες για φωτογράφος και φιλμ, καθώς και σε λέιζερ υψηλής ενέργειας για ιατρική και βιομηχανική χρήση.</li>
                <li>Ανακαλύφθηκε το 1898 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, ενώ το όνομά του προέρχεται από την ελληνική λέξη "kryptos", που σημαίνει "κρυμμένο".</li>`)
        }
        else{
            return("Κρυπτόν")
        }
    }
    if(tsex == "Calcium") {
        if(typos==0){
            return(`            <li>Το ασβέστιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Ca και ατομικό αριθμό 20. Είναι το πέμπτο πιο άφθονο στοιχείο στη Γη και παίζει σημαντικό ρόλο στη λειτουργία των οστών και των δοντιών.</li>
                <li>Το ασβέστιο χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές, όπως στην παραγωγή τσιμέντου και σκυροδέματος, καθώς και στην παραγωγή μετάλλων όπως το αλουμίνιο.</li>
                <li>Ανακαλύφθηκε το 1808 από τον Σκωτσέζο χημικό Σερ Χάι Ρόμπερτ, και το όνομά του προέρχεται από τη λατινική λέξη "calx", που σημαίνει "ασβέστη".</li>`)
        }
        else{
            return("Ασβέστιο")
        }
    }
    
    if(tsex == "Barium") {
        if(typos==0){
            return(`            <li>Το βάριο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Ba και ατομικό αριθμό 56. Είναι ένα μαλακό, ασημί-λευκό μέταλλο που χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές.</li>
                <li>Το βάριο χρησιμοποιείται σε εφαρμογές όπως η παραγωγή πυρηνικών αντιδραστήρων, οι φωτεινές χρωστικές και οι ακτινολογικές εξετάσεις, λόγω των χαρακτηριστικών του στην απορρόφηση ακτινοβολίας.</li>
                <li>Ανακαλύφθηκε το 1774 από τον Σουηδό χημικό Καρλ Γουίλιαμ Σίμερμαν, και το όνομά του προέρχεται από τη λατινική λέξη "bary", που σημαίνει "βαρύ".</li>`)
        }
        else{
            return("Βάριο")
        }
    }
    
    if(tsex == "Beryllium") {
        if(typos==0){
            return(`            <li>Το βηρύλλιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Be και ατομικό αριθμό 4. Είναι ένα σκληρό, αλλά εύθραυστο μέταλλο που χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές.</li>
                <li>Το βηρύλλιο χρησιμοποιείται στην παραγωγή ελαφρών και ανθεκτικών υλικών, όπως τα αεροπλάνα, και σε ειδικές εφαρμογές στην πυρηνική τεχνολογία.</li>
                <li>Ανακαλύφθηκε το 1798 από τον Γάλλο χημικό Λουί Νικολά Βακελίν, και το όνομά του προέρχεται από τη λέξη "beryl", που είναι μια πολύτιμη πέτρα.</li>`)
        }
        else{
            return("Βηρύλλιο")
        }
    }
    if(tsex == "Strontium") {
        if(typos==0){
            return(`            <li>Το στρόντιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Sr και ατομικό αριθμό 38. Είναι μαλακό και αντιδρά εύκολα με το νερό. Χρησιμοποιείται κυρίως στην παραγωγή πυροτεχνημάτων.</li>
                <li>Το στρόντιο χρησιμοποιείται για την παραγωγή κόκκινου φωτός σε πυροτεχνήματα και φώτα, καθώς και στην κατασκευή ραδιολογικών ανιχνευτών και άλλων ειδικών εφαρμογών.</li>
                <li>Ανακαλύφθηκε το 1790 από τον Σκοτσέζο χημικό Άλαν Ραμσέι, και το όνομά του προέρχεται από την πόλη Στρόντιου στην Σκωτία.</li>`)
        }
        else{
            return("Στρόντιο")
        }
    }
    
    if(tsex == "Uranium") {
        if(typos==0){
            return(`            <li>Το ουράνιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο U και ατομικό αριθμό 92. Είναι γνωστό για τη χρήση του στην παραγωγή πυρηνικής ενέργειας και όπλων.</li>
                <li>Το ουράνιο είναι ραδιενεργό και χρησιμοποιείται για την παραγωγή πυρηνικής ενέργειας σε πυρηνικούς αντιδραστήρες και ως πρώτης ύλης για πυρηνικά όπλα.</li>
                <li>Ανακαλύφθηκε το 1789 από τον Γερμανό χημικό Μάρτιν Χάινριχ Κλ프로τ, και το όνομά του προέρχεται από τον πλανήτη Ουρανό.</li>`)
        }
        else{
            return("Ουράνιο")
        }
    }
    
    if(tsex == "Plutonium") {
        if(typos==0){
            return(`            <li>Το πλουτώνιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο Pu και ατομικό αριθμό 94. Είναι εξαιρετικά ραδιενεργό και χρησιμοποιείται σε πυρηνικά όπλα και πυρηνικούς αντιδραστήρες.</li>
                <li>Το πλουτώνιο είναι ένα από τα πιο επικίνδυνα και ραδιενεργά στοιχεία στον κόσμο, και η ακτινοβολία του είναι τόσο ισχυρή που μπορεί να προκαλέσει σοβαρές βλάβες ακόμα και με μικρές ποσότητες του.</li>
                <li>Ανακαλύφθηκε το 1940 από τους Αμερικανούς επιστήμονες Γκλεν Σιμινς και Εντουαρντ Τζόουνς, και το όνομά του προέρχεται από τον πλανήτη Πλούτωνα.</li>`)
        }
        else{
            return("Πλουτώνιο")
        }
    } 
    else{return("")}}