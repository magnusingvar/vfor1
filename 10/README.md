# vfor1Verk10
CSS listar, töflur og form

1.  Búið til HTML og CSS skjal

2.  Vinnið í HTML skjalinu
2.1 Setjið titil í skjalið og búið til tengingu við CSS skjalið
2.2 Setjið upp heading 1 tagg og setjið textann "Poetry Workshops" þar
2.3 Setjið upp p tagg sem inniheldur textann "We will be conducting a number of poetry workshops and symposiums throughout the year."
2.4 Setjið upp p tagg sem inniheldur textann "Please note that the following events are free to members:"
2.5 Setjið upp tagg fyrir óraðanlista
2.5.1 Setjið upp listatagg sem inniheldur textann "A Poetic Perspective"
2.5.2 Setjið upp listatagg sem inniheldur textann "Walt Whitman at War"
2.5.3 Setjið upp listatagg sem inniheldur textann "Found Poems and Outsider Poetry"

2.6 Búið til table tagg
2.6.1 B'uið til tagg fyrir röð sem inniheldur id "head"
2.6.1.1 Búið til tóman table head dálk (th)
2.6.1.2 Búið til table head sem inniheldur "New York"
2.6.1.3 Búið til table head sem inniheldur "Chicago"
2.6.1.4 Búið til table head sem inniheldur "San Francisco"

2.6.2 Búið til tagg fyrir röð
2.6.2.1 Búið til table head sem inniheldur "A Poetic Perspective"
2.6.2.2 Búið til dálk (td) sem inniheldur "Sat, 4 Feb 2012<br />11am - 2pm"
2.6.2.3 Búið til dálk sem inniheldur "Sat, 3 Mar 2012<br />11am - 2pm"
2.6.2.4 Búið til dálk sem inniheldur "Sat, 17 Mar 2012<br />11am - 2pm"

2.6.3 Búið til röð sem er með class "even"
2.6.3.1 Búið til table head sem inniheldur "Walt Whitman at War"
2.6.3.2 Búið til dálk sem inniheldur "Sat, 7 Apr 2012<br />11am - 1pm"
2.6.3.3 Búið til dálk sem inniheldur "Sat, 5 May 2012<br />11am - 1pm"
2.6.3.4 Búið til dálk sem inniheldur "Sat, 19 May 2012<br />11am - 1pm"

2.6.4 Búið til röð
2.6.4.1 Búið table head sem inniheldur "Found Poems &amp; Outsider Poetry"
2.6.4.2 Búið til dálk sem inniheldur "Sat, 9 Jun 2012<br />11am - 2pm"
2.6.4.3 Búið til dálk sem inniheldur "Sat, 7 Jul 2012<br />11am - 2pm"
2.6.4.4 Búið til dálk sem inniheldur "Sat, 21 Jul 2012<br />11am - 2pm"

2.6.5 Búið til röð sem er með class "even"
2.6.5.1 Búið til table head með "Natural Death: An Exploration"
2.6.5.2 Búið til dálk sem inniheldur "Sat, 4 Aug 2012<br />11am - 4pm"
2.6.5.3 Búið til dálk sem inniheldur "Sat, 8 Sep 2012<br />11am - 4pm"
2.6.5.4 Búið til dálk sem inniheldur "Sat, 15 Sep 2012<br />11am - 4pm"

2.7 Búið til form tagg sem er með action "http://www.example.com/form.php" og method "get"
2.7.1 Búið til fieldset
2.7.1.1 Búið til legend tagg sem inniheldur "Register your interest"
2.7.1.2 Búið til p tagg
2.7.1.2.1 Búið til label tagg sem er með class "title", merkið það við idið "name" og inniheldur textann "Your name:"
2.7.1.2.2 Búið til input tagg fyrir texta dálk, Látið hann fá nafnið "name" og id "name"
2.7.1.2.3 Búið til tagg fyrir línubil
2.7.1.2.4 Búið til label tagg sem er með class "title, merkið það við idið "email" og inniheldur textann "Your email:"
2.7.1.2.5 Búið til input tagg fyrir email. Látið hann fá nafnið "email" og id "email"

2.7.1.3 Búið til p tagg
2.7.1.3.1 Búið til label, gefið class "title" og merkið við idið "location" og látið með textann "Your closest center:"
2.7.1.3.2 Búið til select tagg og gefið því nafnið "location" og id "location"
2.7.1.3.2.1 Búið til option tagg sem er með gildið "ny" og inniheldur textann "New York"
2.7.1.3.2.1.1 Búið til option tagg sem er með gildið "il" og inniheldur textann "Chicago"
2.7.1.3.2.1.2 Búið til option tagg sem er með gildið "ca" og inniheldur textann "San Francisco"

2.7.1.4 Búið til span tagg sem er með class "title" og textann "Are you a member?"
2.7.1.5 Búið til label tagg sem inniheldur input tagg með radio týpunni, nafnið "member" og gildið "yes" og textann Yes
2.7.1.6 Búið til label tagg sem inniheldur input tagg með radio týpunni, nafnið "member" og gildið "no" og textann no

2.7.2 Búið til div tagg með class "submit"
2.7.2.1 Búið til input taggið með týpuna submit og gildið "Register"

3.  Vinnið í CSS skjalinu
3.1 Hafið áhrif á body
3.1.1 Notið fontana Arial, Verdana, sans-serif
3.1.2 Setjið letur stærðina í 90%
3.1.3 Setjið letur litinn í #666666
3.1.4 Setjið bakgrunnslitinn í #f8f8f8

3.2 Hafið áhrif á li töggin
3.2.1 Notið skipunina list-style-image til þess að setja inn myndina icon-plus.png
3.2.2 Setjið línu hæðina í 1.6em

3.3 Hafið áhrif á table
3.3.1 Setjið border spacing í 0 pixla

3.4 Hafið áhrif á th og td töggin
3.4.1 Setjið paddin í topp 5pixla, hægri 30 pixla, botn 5pixla og vinstri 10pixla
3.4.2 Setjið letur stærðina í 90%
3.4.3 Setjið margin í 0 pixla
3.4.4 Setjið letur til vinstri (text align)
3.4.5 Setjið bakgrunnslitinn í #e0e9f0
3.4.6 Setjið border top í 1 pixla breidd, solid týpuna og litinn #f1f8fe
3.4.7 Setjið border botn í 1 pixla breidd, solid týpuna og litinn #cbd2d8
3.4.8 Setjið border hægri í 1 pixla breidd, solid týpuna og litinn #cbd2d8

3.5 Hafið áhrif á tr#head th
3.5.1 Gefið letur litinn #fff
3.5.2 Gefið bakgrunnslitinn #90b4d6
3.5.3 Gefið border botn breiddina 2 pixla, týpuna solid og litinn #547ca0
3.5.4 Gefið border hægri breiddina 1 pixla, týpuna solid og litinn #749abe
3.5.5 Gefið border top breiddina 1 pixla, týpuna solid og litinn #90b4d6
3.5.6 Miðjið textann
3.5.7 Setjið inn text-shadow með -1px -1px 1px #666666
3.5.8 Setjið letur breidd á 0.15 em

3.6 Hefið áhrif á td töggin
3.6.1 Setjið text-shadow með 1px 1px 1px #ffffff

3.7 Hafið áhrif á tr.even td, tr.even th
3.7.1 Setjið á bakgrunnslitinn #e8eff5

3.8 Hafið áhrif á tr#head th:first-child
3.8.1 Setjið border top left radius á 5 pixla

3.9 Hafið áhrif á tr#head th:last-child
3.9.1 Setjið border top right radius í 5 pixla

3.10  Hafið áhrif á fieldset
3.10.1  Setjið á breiddina 310 pixla
3.10.2  Setjð á margin top með 20 pixlum
3.10.3  Setjið á border með breidd 1 pixla, týpuna solid og litinn #d6d6d6
3.10.4  Setjið á bakgrunnslitinn #ffffff
3.10.5  Setjið á línu hæðina 1.6em

3.11  Hafið áhrif á legend taggið
3.11.1  Skáletrið letrið
3.11.2  Setjið letur litinn #666666 á

3.12  Hafið áhrif á input[type="text"]
3.12.1  Setjið á beiddina 120 pixla
3.12.2  Setjið á border með breiddina 1 pixla, týpuna solid og litinn #d6d6d6
3.12.3  Setjið á padding 2 pixla
3.12.4  Setjið á outline none

3.13  Hafið áhrif á input[type="text"]:focus, input[type="text"]:hover
3.13.1  Setjið á bakgrunnslitinn #d0e2f0
3.13.2  Setjið á border með breiddinni 1 pixla, týpunni solid og litinn #999999

3.14  Hafið áhrif á input[type="submit"]
3.14.1  Gefið border með breidd 1 pixla, týpunni solid og litinn #006633
3.14.2  Gefið bakgrunnslitinn #009966
3.14.3  Gefið letur litinn #ffffff
3.14.4  Gefið border radíus 5 pixla
3.14.5  Gefið padding 5 pixla
3.14.6  Gefið margin topp 10 pixla

3.15  Hafið áhrif á input[type="submit"]:hover
3.15.1  Gefið border breiddina 1 pixla, týpuna solid og litinn #006633
3.15.2  Gefið bakgrunnslitinn #00cc33
3.15.3  Gefið letur litinn #ffffff
3.15.4  Gefið músarbendlinum (cursor) breytingu yfir í pointer

3.16  Hafið áhrif á class title 
3.16.1  Látið til vinstri (float left)
3.16.2  Gefið breiddina 160 pixla

3.17  Hafið áhrif á class "submit"
3.17.1  Setjið á breiddina 310 pixla
3.17.2  Setjið textann til hægri (text align)
