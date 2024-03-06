import Image from "next/image";
import React from "react";

const Tuzuk = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-12 lg:gap-20">
      <Image
        src="/assets/geometrical-hand.png"
        alt="hakkimizda hero image"
        width={1024}
        height={768}
        className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[600px] object-cover object-top"
      />
      <section className="flex flex-col gap-6">
        <h2 className="text-xl lg:text-4xl font-bold text-orange-500 text-center">
          YAZILIMCILAR FEDERASYONU TÜZÜĞÜ
        </h2>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Adı ve Merkezi</h3>
          <p>
            Madde1– Federasyonun Adı; “Yazılımcılar Federasyonu” dur. Kısa adı
            “TÜYAFED” dir. Merkezi İstanbul’dur. Yurt içinde ve yurt dışında
            temsilcilik açabilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Amacı:</h3>
          <p>
            Madde2–Federasyonun amacı; Yazılım Sektörü firmalarına ve sektör
            mensuplarına mesleki sosyal, teknik ve ekonomik yönlerden rehberlik
            etmek, Türkiye Yazılım Sektörünün endüstriyel ve ticari gelişimi
            için faaliyet yürütmek, Yazılım sektörü için ortak ilke ve hedefler
            oluşturmak, Sektörel kuruluşların ulusal, ekonomik politikalarının
            oluşturulmasına katkıda bulunmak, Sektördeki kuruluşların
            uluslararası kurum ve kuruluşlarla ilişki ve entegrasyonunu sağlama
            yönünde projeler geliştirmek, Sorunları ve çözüm önerilerini kamuoyu
            ile yetkili kurum ve kuruluşlara ulaştırmak, çözümü için yapıcı rol
            üstlenmek. Yazılım sektörünün yasal gerekliliklere uygun, tüketici
            haklarına saygılı, haksız rekabete yol açmayacak, etik kuralları
            gözeten bir ticari faaliyet içinde olmasını sağlamak, Sektörde
            özdenetimi gerçekleştirmek, Eğitim ve Mesleki standartların
            oluşmasına katkıda bulunmak ve oluşmuş mesleki standartların
            sektörde uygulanması ve sahiplenilmesi için çalışmak, Gençlerin
            eğitilmesi, lisanslanması, takımlar oluşturulması, Yapay zekâ ile
            ilgili faaliyetlerin hayata geçirilmesine katkı sunmak. Federasyonu
            oluşturan derneklerin tüm bu amaçlar doğrultusunda birlikte
            çalışmasını ve ortak hedef ve amaçların gerçekleştirilmesini
            sağlamak Federasyonun faaliyet alanı amacına uygun olarak yurt içi
            ve dışında çalışmalar yürütmek.
          </p>

          <h4 className="font-semibold">Federasyonu kuran dernekler:</h4>
          <ul className="list-disc list-inside">
            <li>ABİAD-ADANA BİLİŞİMCİ İŞ ADAMLARI DERNEĞİ</li>
            <li>BİLGİSAYAR YAZILIMCILARI VE PROGRAMCILARI DERNEĞİ</li>
            <li>BİNGÖL BİLİŞİM VE TEKNOLOJİ DERNEĞİ</li>
            <li>MERSİN BİLİŞİM SEKTÖRÜ İŞ İNSANLARI DERNEĞİ</li>
            <li>ROBOTİKZEKA ROBOTİK KOD VE YAPAY ZEKA YAZILIMLARI DERNEĞİ</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Federasyonca Sürdürülecek Çalışma Konuları ve Biçimleri
          </h3>
          <ol className="list-decimal list-inside">
            <li>
              Bilişim ve Yazılım Sektörünün ekonomik, sosyal ve teknik
              sorunlarına çözüm aramak,{" "}
            </li>
            <li>
              Bilişim ve Yazılım sektörünün ürün kalitesi ve verimliliğini
              yükseltmeye yönelik araştırma-geliştirme ve teknik üretim
              çabalarını desteklemek,{" "}
            </li>
            <li>
              Bilişim ve Yazılım sektörünün, kendini ilgilendiren konularda
              hızlı ve doğru bilgi alışverişini sağlamak,{" "}
            </li>
            <li>
              Bilişim ve Yazılım sektörünün Ürün ve faaliyetlerinin yurt içi ve
              yurt dışında tanıtımını yapmak,{" "}
            </li>
            <li>
              Bilişim ve Yazılım Sektörünün ekonomik, bilimsel, teknolojik,
              kültürel ve ticari gelişimini sağlayacak kurum, konsorsiyum,
              ortaklık ve toplulukları kurmasını, teşvik ederek, bunlara katılım
              sağlamak ve desteklemek,{" "}
            </li>
            <li>
              Sektörün üretim ve ticaretinin mesleki etik ve kamu yararına
              uygun, ahenkli, planlı ve verimli tarzda gelişmesini sağlamak,
            </li>
            <li>
              Sektörde açıkça haksız rekabet teşkil eden fiil ve tasarruflara
              engel olmaya çalışmak,
            </li>
            <li>
              Küresel rekabet koşullarında üyelerinin rekabetçi biçimde
              yapılanmaları için iş birliği alanları yaratmaya çalışmak,
            </li>
            <li>
              Federasyonun çatısı altında temsil edilen tüm sektör ve alt
              sektörlerde gerek yurt içinde üretilen gerek ise dış alım yolu ile
              ülkeye getirilen her türlü ürün ve ikame malzemenin standart ve
              normlara uygun olup olmadıklarını takip ve tetkik etmek,
            </li>
            <li>
              Gerektiğinde standart tespiti yapabilecek laboratuvar ve benzeri
              tesisler kurmak,
            </li>
            <li>
              Üyeleri ve/veya mensubu oldukları kuruluşlar arasında rasyonel
              ilişkilerin kurulmasına öncülük etmek, talep edilmesi halinde
              aralarında çıkan uyuşmazlıklarda hakemlik yapmak,
            </li>
            <li>
              Yazılım sektörünün mesleki, ticari ve sektörel sorunlarını tespiti
              ve bunlara çözüm getirmek amacı ile resmi kurum, kuruluş ve diğer
              meslek kuruluşları nezdinde girişimlerde bulunmak,
            </li>
            <li>
              Bilim, mesleki eğitim ve öğretim kurumları ile benzeri
              kuruluşların bu alanlardaki çalışmalarını, olabilecek her türlü
              yardım ve destek ile özendirmek, araştırmaların sonuçlarından
              yararlanılmasına öncülük etmek,
            </li>
            <li>
              Yurt içi ve yurt dışında bilimsel araştırmalar yapmak üzere AR-GE
              laboratuvarları gibi birimler oluşturmak veya bu yöndeki
              girişimlere katkıda bulunarak destek olmak,
            </li>
            <li>
              Sektör ve tüm alt sektörlerle ilgili yurt içi ve yurt dışı
              istatistiki bilgileri ve verileri temin ederek üyelerine duyurmak,
              bu konularda bilgi depolamak ve sistematik bilgi arşivleri
              oluşturmak,
            </li>
            <li>
              Rayiçler, birim fiyatlar ve fiyat analizleri üzerinde gerekli
              araştırmaları yaparak üyelerine ve ilgililere bildirmelerde
              bulunmak,
            </li>
            <li>
              Yurt içi ve yurt dışında sektör ürünlerinin kullanımının teşviki,
              pazar payının artırılması amacına yönelik olarak ortak tanıtım ve
              reklam yöntemleri geliştirmek, bu amaçla sponsorluklar bulmak da
              dahil etkin çalışmalar yapmak,
            </li>
            <li>
              Yasal koşulları yerine getirmek kaydı ile yurt içi ve yurt
              dışındaki benzer amaçlı dernek, birlik ve kuruluşlarla ilişki ve
              iş birliği kurmak, ortak çalışmalar yapmak, aynı amaçla yurt
              dışında ve yurt içinde kurulmuş, konfederasyonlara katılabilir,
              üye olabilir.
            </li>
            <li>
              Mesleki gelişim ve yetkinlik için meslek içi kurs, eğitimler,
              seminer, konferans, panel ve benzeri toplantılar düzenlemek,
              Dergi, bülten, kitap broşür, CD, DVD vb dijital ortam ürünleri
              çıkarmak, Radyo ve TV kurmak, Sergi, Yarışma ve fuar düzenlemek ve
              yurt içi ve yurt dışı fuarlara katılmak,
            </li>
            <li>
              Münhasıran amacının gerçekleşmesini sağlamaya yönelik gelir için,
              kazanç paylaşmayı amaçlamayan iktisadi işletmeler kurmak,
            </li>
            <li>
              Üniversiteler ve bilimsel araştırma kuruluşları ile iş birliği
              yapmak,
            </li>
            <li>
              Uluslararası ilişkilere önem verir: kurumsal, sektörel ve ulusal
              düzeylerde deneyim alışverişi, iş birliği ve ortak girişim
              olanaklarını geliştirmeye çalışmak, Uluslararası temsilcilikler
              vermek,
            </li>
            <li>
              Amacı ile faaliyet ve çalışma konu ve biçimleri için yasa ve tüzük
              hükümlerinin elverdiği ve gerekli saydığı diğer konularda
              faaliyetler yapmak,
            </li>
            <li>
              Federasyon amaç ve hizmet konularını gerçekleştirmek için: Üyeler
              kazandırmak,
            </li>
            <li>
              Amaç ve hizmet konuları ile gelir artırıcı projeler için
              ortaklıklar, iktisadi işletmeler ve yardımlaşma sandığı kurmak,
            </li>
            <li>
              Gerekli taşınır, taşınmaz mallar satın almak, kiralamak ve satmak,
              taşınır, taşınmaz mallar üzerinde her türlü hakları koydurabilmek,
              işletebilmek ve her türlü inşaatı yaptırabilmek, Yardım ve bağış
              almak ve vermek,
            </li>
            <li>
              Amaç ve hizmet konularında her türlü bilimsel, sosyal, kültürel,
              teknik olaylar, gösteriler, toplantılar, geziler vb. düzenlemek;
              araştırma, inceleme, etütler vb. yapmak; öneri ve dilekleri
              saptamak,
            </li>
            <li>
              Amacı ile faaliyet ve çalışma konu ve biçimleri için yasa ve tüzük
              hükümlerinin elverdiği ve gerekli saydığı diğer biçimlere göre
              çalışmalar yürütmek,
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Federasyonun Faaliyet Alani</h3>
          <p>
            Federasyon, Yazılım, Bilişim ve Teknoloji alanlarında faaliyet
            gösterir
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Üye Olma</h3>
          <p>Madde 3– Üyelerle ilgili esaslar şunlardır:</p>

          <p>
            Federasyona, Federasyona üye derneklerle kuruluş amaçları aynı,
            Tüzel kişiliği kazanmış, Federasyonun yukarıda ikinci maddede yazılı
            amaçları ile faaliyet, çalışma konularını ve biçimlerini benimseyen
            dernekler, üye olabilir. Federasyon yönetim kuruluna yazılı olarak
            yapılacak üyelik başvurusu, federasyon yönetim kurulunca en çok 30
            gün içerisinde üyeliğe kabul veya isteğin reddi şeklinde karara
            bağlanır ve sonuç yazıyla ilgili derneğe bildirilir. Aday derneğin
            üyelik isteği yönetim kurulu tarafından reddedilmişse, itiraz
            halinde buna ilişkin nihai kararı genel kurul verir. Federasyonu
            önemli katkıları bulunan dernekler Genel kurul kararıyla onursal üye
            olarak kabul edilebilir. Onursal üyelerin seçme ve seçilme hakkı
            yoktur. İsterlerse aidat verebilirler. Federasyona üye olan
            dernekler tüzel kişiliklerini ve mal varlıklarını korurlar. Üye
            derneklerin mülkleri üzerinde federasyon hiçbir talepte bulunamaz.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Üyelikten Çıkma</h3>
          <p>
            Madde 4- Her üye dernek yazılı olarak bildirmek kaydıyla,
            federasyondan çıkma hakkına sahiptir.
          </p>
          <p>
            Üye derneğin istifa dilekçesi yönetim kuruluna ulaştığı anda yönetim
            kurulunun kararı ile çıkış işlemleri sonuçlanmış sayılır. Üyelikten
            ayrılma, üye derneğin federasyona olan birikmiş borçlarını sona
            erdirmez.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Üyelikten Çıkarılma</h3>
          <p>Madde 5-Federasyon üyeliğinden çıkarılmayı gerektiren haller.</p>

          <ol className="list-inside list-decimal">
            <li>Federasyon tüzüğüne aykırı davranışlarda bulunmak,</li>
            <li>Verilen görevlerden sürekli kaçınmak,</li>
            <li>
              Yazılı ikaza rağmen birikmiş üyelik aidatını iki ay içinde
              ödememek,
            </li>
            <li>Federasyon organlarınca verilen kararlara uymamak.</li>
            <li>Üye olma şartlarını kaybetmiş olmak,</li>
          </ol>

          <p>
            Yukarıda sayılan durumlardan birinin tespiti halinde yönetim kurulu
            kararı ile üyelikten çıkarılır.
          </p>
          <p>
            Federasyondan çıkan veya çıkarılanlar, üye kayıt defterinden silinir
            ve federasyon malvarlığında hak iddia edemez. Üyelikten
            çıkarılanların genel kurula itiraz hakkı vardır. Genel kurulun
            verdiği karar kesindir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Federasyonun Organları:</h3>
          <ol className="list-inside list-decimal">
            <li>Genel Kurul</li>
            <li>Yönetim Kurulu</li>
            <li>Denetleme Kurulu </li>
            <li>
              Federasyon Meclisi - Federasyonun faaliyetlerini daha etkin
              yürütebilmesi amacıyla, yukarıda belirtilen yasa gereği zorunlu
              olanlara ilaveten, ayrıca buda ihdas edilmiştir
            </li>
          </ol>
          <p>
            Federasyon yasa ve tüzüğe göre çıkaracağı yönetmelikle ihtiyaca göre
            farklı organlar ve komiteler de kurabilir.
          </p>
          <p>Federasyon Genel Kurulunun Kuruluş Şekli Ve Toplanma Zamanı:</p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Kuruluş şekli</h3>
          <p>
            Madde 7-Genel kurul, federasyonun en yetkili karar organı olup;
            federasyon yönetim ve denetleme kurulu ile federasyona üye
            derneklerin yönetim kurulu tarafından seçilmiş delegelerden oluşur.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Toplanma Zamanı</h3>
          <p>
            Madde 8-Genel kurul üç yılda bir Ekim ayı içerisinde yönetim
            kurulunca belirlenecek gün, yer ve saatte toplanır. Olağan toplantı
            dışında genel kurul, yönetim ve denetim kurulunun gerekli gördüğü
            hallerde veya delegelerin beşte birinin yazılı isteği üzerine
            olağanüstü toplanır. Genel kurul toplantıya yönetim kurulunca
            çağrılır. Denetleme kurulunun veya delegelerin beşte birinin yazılı
            isteği üzerine yönetim kurulu genel kurulu bir ay içerisinde
            toplantıya çağırmazsa, denetleme kurulu veya toplantı isteğinde
            bulunan üyelerden birinin müracaatı üzerine mahalli sulh hakimi
            duruşma yaparak federasyon üyeleri arasında üç kişilik bir heyeti,
            genel kurulu toplamaya çağırmakla görevlendirir.
          </p>
          <p>
            Dernekler delege isim listelerini federasyon genel kurul tarihinden
            en az bir ay önce federasyona bildirmek zorundadır.
          </p>
          <p>
            Her dernek Federasyonda 7 delege ile temsil edilir. Derneklerin
            yönetim ve denetim kurulunda görevli olanlar federasyon yönetim ve
            denetim kuruluna seçildiklerinde, dernekteki görevlerine federasyon
            hizmetini engellememek kaydıyla devam edebilirler. Aksi takdirde
            dernekteki görevinden ayrılmak zorundadırlar.
          </p>
          <p>
            Genel kurulda her delegenin bir oyu vardır. Delege oyunu kendisi
            kullanır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Çağrı Usulü</h3>
          <p>
            Madde 9-Yönetim Kurulu, federasyona kayıtlı bulunan üyelerin
            listesini düzenler. Genel kurula katılacak üyeler, en az on beş gün
            önceden, günü, saati, yeri ve gündemi bir gazetede ilan edilmek veya
            yazılı ya da elektronik posta ile bildirilmek suretiyle toplantıya
            çağrılır. Bu çağrıda, çoğunluk sağlanamaması sebebiyle toplantı
            yapılamazsa, ikinci toplantının hangi gün, saat ve yerde yapılacağı
            da belirtilir. İlk toplantı ile ikinci toplantı arasındaki süre yedi
            günden az, atmış günden fazla olamaz.
          </p>
          <p>
            Toplantı, çoğunluk sağlanamaması sebebinin dışında başka bir nedenle
            geri bırakılırsa, bu durum geri bırakma sebepleri de belirtilmek
            suretiyle, ilk toplantı için yapılan çağrı usulüne uygun olarak
            üyelere duyurulur. İkinci toplantının geri bırakma tarihinden
            itibaren en geç altı ay içinde yapılması zorunludur. Üyeler ikinci
            toplantıya, birinci fıkrada belirtilen esaslara göre yeniden
            çağrılır.
          </p>
          <p>Genel kurul toplantısı bir defadan fazla geri bırakılamaz.</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Toplantı Yeri</h3>
          <p>
            Madde 10- Genel kurul toplantıları federasyon Merkezinin bulunduğu
            yerde veya yönetim kurulunun uygun göreceği başka yerde de yapılır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Toplantı yeter sayısı:</h3>
          <p>
            Madde 11-Genel kurul, federasyona katılma hakkı bulunan üyelerinin
            salt çoğunluğu ile; tüzük değişikliği ve federasyonun feshi
            hallerinde üyelerin 2/3’ünün katılımıyla toplanır, çoğunluğun
            sağlanamaması sebebiyle toplantının ertelenmesi durumunda ikinci
            toplantıda çoğunluk aranamaz. Ancak bu ikinci toplantıya katılan üye
            sayısı federasyon yönetim ve denetleme kurulları üye tam sayısı
            toplamından az olamaz.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Toplantının Yapılış Usulü</h3>
          <p>
            Madde 12-Genel kurul, katılma hakkı bulunan üyelerin salt
            çoğunluğunun, tüzük değişikliği ve federasyonun feshi hallerinde ise
            üçte ikisinin katılımıyla toplanır; çoğunluğun sağlanamaması
            sebebiyle toplantının ertelenmesi durumunda ikinci toplantıda
            çoğunluk aranmaz. Ancak, bu toplantıya katılan üye sayısı, yönetim
            ve denetim kurulları üye tam sayısından az olamaz.
          </p>
          <p>
            Genel kurula katılma hakkı bulunan üyelerin listesi toplantı yerinde
            hazır bulundurulur. Toplantı yerine girecek üyelerin resmi
            makamlarca verilmiş kimlik belgeleri, yönetim kurulu üyeleri veya
            yönetim kurulunca görevlendirilecek görevliler tarafından kontrol
            edilir. Üyeler, yönetim kurulunca düzenlenen listedeki adları
            karşısına imza koyarak toplantı yerine girerler.
          </p>
          <p>
            Toplantı yeter sayısı sağlanmışsa durum bir tutanakla tespit edilir
            ve toplantı yönetim kurulu başkanı veya görevlendireceği yönetim
            kurulu üyelerinden biri tarafından açılır. Toplantı yeter sayısı
            sağlanamaması halinde de yönetim kurulunca bir tutanak düzenlenir.
          </p>
          <p>
            Açılıştan sonra, toplantıyı yönetmek üzere bir başkan ve yeteri
            kadar başkan vekili ile yazman seçilerek divan heyeti oluşturulur.
          </p>
          <p>
            Federasyon organlarının seçimi için yapılacak oylamalarda, oy
            kullanan üyelerin divan heyetine kimliklerini göstermeleri ve
            hazırun listesindeki isimlerinin karşılarını imzalamaları
            zorunludur.{" "}
          </p>
          <p>
            Toplantının yönetimi ve güvenliğinin sağlanması divan başkanına
            aittir.{" "}
          </p>
          <p>
            Genel kurulda, yalnızca gündemde yer alan maddeler görüşülür. Ancak
            toplantıda hazır bulunan üyelerin onda biri tarafından görüşülmesi
            yazılı olarak istenen konuların gündeme alınması zorunludur.
          </p>
          <p>
            Genel kurulda her üyenin bir oy hakkı vardır; üye oyunu şahsen
            kullanmak zorundadır. Onursal üyeler genel kurul toplantılarına
            katılabilir ancak oy kullanamazlar.{" "}
          </p>
          <p>
            Toplantıda görüşülen konular ve alınan kararlar bir tutanağa yazılır
            ve divan başkanı ile yazmanlar tarafından birlikte imzalanır.
            Toplantı sonunda, tutanak ve diğer belgeler yönetim kurulu başkanına
            teslim edilir. Yönetim kurulu başkanı bu belgelerin korunmasından ve
            yeni seçilen yönetim kuruluna yedi gün içinde teslim etmekten
            sorumludur.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Toplantıda görüşülecek konular:
          </h3>
          <p>
            Madde 13-Genel kurul toplantısında yalnız gündemde yer alan maddeler
            görüşülür.{" "}
          </p>
          <p>
            Ancak toplantıda hazır bulunan üyelerin en az onda biri tarafından
            görüşülmesi istenen konuların gündeme alınması zorunludur.
          </p>
          <p>
            Genel Kurulun Görevleri, Yetkileri, Oy Kullanma Ve Karar Alma Usul
            Ve Şekilleri
          </p>
          <p>Genel kurulun görev ve yetkileri:</p>
          <p>
            Madde 14-Aşağıdaki yazılı hususlar genel kurulca görüşülüp karara
            bağlanır.
          </p>
          <ol className="list-inside list-decimal">
            <li>Federasyon organlarının seçilmesi,</li>
            <li>Federasyon tüzüğünün değiştirilmesi,</li>
            <li>
              Yönetim ve denetim kurulları raporlarının görüşülmesi ve yönetim
              kurulunun ibrası,
            </li>
            <li>
              Yönetim kurulunca hazırlanan bütçenin görüşülüp aynen veya
              değiştirilerek kabul edilmesi,
            </li>
            <li>
              Federasyon için gerekli olan taşınmaz malların satın alınması veya
              mevcut taşınmaz malların satılması hususunda yönetim kuruluna
              yetki verilmesi,
            </li>
            <li>
              Yönetim kurulunca federasyon çalışmaları ile ilgili olarak
              hazırlanacak yönetmelikleri inceleyip aynen veya değiştirilerek
              onaylanması,
            </li>
            <li>
              Federasyon yönetim ve denetim kurullarının kamu görevlisi olmayan
              başkan ve üyelerine verilecek ücret ile her türlü ödenek, yolluk
              ve tazminatlar ile dernek hizmetleri için görevlendirilecek
              üyelere verilecek gündelik ve yolluk miktarlarının tespit
              edilmesi,
            </li>
            <li>
              Federasyonun konfederasyona katılması ve ayrılmasının
              kararlaştırılması,
            </li>
            <li>Federasyonun fesih edilmesi,</li>
            <li>
              Yönetim kurulunun diğer önerilerinin incelenip karara bağlanması,
            </li>
            <li>
              Mevzuatta genel kurulca yapılması belirtilen diğer görevlerin
              yerine getirilmesi,
            </li>
          </ol>
          <p>
            Genel kurul, federasyonun diğer organlarını denetler ve onları haklı
            sebeplerle her zaman görevden alabilir.
          </p>
          <p>
            Genel kurul, üyeliğe kabul ve üyelikten çıkarma hakkında son kararı
            verir. Federasyonun en yetkili organı olarak federasyonun diğer bir
            organına verilmemiş olan işleri görür ve yetkileri kullanır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Oy kullanma ve karar alma usul ve şekilleri:
          </h3>
          <p>
            Madde 15- Genel kurul kararları toplantıya katılan üyelerin salt
            çoğunluğuyla; Tüzük değişikliği ve federasyonun feshi kararları
            ancak toplantıya katılan üyelerin 2/3 çoğunluğuyla alınır. Oylar
            gizli veya açık olarak belirlenir. Gizli oylar yönetim kurulu
            tarafından mühürlenmiş kâğıtların veya oy pusulalarının, üyeler
            tarafından gereği yapıldıktan sonra mühürlenmiş veya içi boş bir
            kaba katılması ile toplanan ve oy vermenin bitiminden sonra açık
            dökümü yapılarak belirlenen oylardır. Açık oylamada ise genel kurul
            başkanının belirteceği yöntem uygulanır. Geçerli oyların yarısından
            bir fazlasına erişen aday veya öneri kazanmış veya kararlaştırılmış
            olur.
          </p>
          <p>
            Yönetim Ve Denetleme Kurullarının Görev Ve Yetkileri, Ne Suretle
            Seçileceği, Asil ve Yedek Üye Sayısı
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Yönetim Kurulu</h3>
          <p>
            Madde 16- Yönetim kurulu, 9 asıl ve 9 yedek üye olarak genel kurulca
            seçilir.
          </p>
          <p>
            Yönetim kurulu, tüm üyelerin haber edilmesi şartıyla her zaman
            toplantıya çağrılabilir. Üye tamsayısının yarısından bir fazlasının
            hazır bulunması ile toplanır. Kararlar, toplantıya katılan üye tam
            sayısının salt çoğunluğu ile alınır. Aynı kişi üç dönemden daha
            fazla üst üste federasyon yönetim kurulu başkanlığı yapamaz.
          </p>
          <p>
            Yönetim kurulu asıl üyeliğinde istifa veya başka sebeplerden dolayı
            boşalma olduğu takdirde genel kurulda aldığı oy çokluğu sırasına
            göre yedek üyelerin göreve çağrılması mecburidir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Yönetim Kurulunun Görev ve Yetkileri{" "}
          </h3>
          <p>Yönetim kurulu aşağıdaki hususları yerine getirir.</p>
          <ol className="list-inside list-decimal">
            <li>
              Federasyonu temsil etmek veya bu hususta kendi üyelerinden bir
              veya birkaçına yetki vermek,
            </li>
            <li>
              Gelir ve gider hesaplarına ilişkin işlemleri yapmak ve gelecek
              döneme ait bütçeyi hazırlayarak genel kurula sunmak,
            </li>
            <li>
              Federasyonun çalışmaları ile ilgili yönetmelikleri hazırlayarak
              genel kurul onayına sunmak,
            </li>
            <li>
              Genel kurulun verdiği yetki ile taşınmaz mal satın almak, derneğe
              ait taşınır ve taşınmaz malları satmak, bina veya tesis inşa
              ettirmek, kira sözleşmesi yapmak, dernek lehine rehin ipotek veya
              ayni haklar tesis ettirmek,
            </li>
            <li>Gerekli görülen yerlerde temsilcilik açılmasını sağlamak,</li>
            <li>Genel kurulda alınan kararları uygulamak,</li>
            <li>
              Her faaliyet yılı sonunda derneğin işletme hesabı tablosu veya
              bilanço ve gelir tablosu ile yönetim kurulu çalışmalarını
              açıklayan raporunu düzenlemek, toplandığında genel kurula sunmak,
            </li>
            <li>Bütçenin uygulanmasını sağlamak,</li>
            <li>
              Federasyona üye alınması veya üyelikten çıkarılma hususlarında
              karar vermek,
            </li>
            <li>
              Federasyonun amacını gerçekleştirmek için her çeşit kararı almak
              ve uygulamak,
            </li>
            <li>
              Mevzuatın kendisine verdiği diğer görevleri yapmak ve yetkileri
              kullanmak,
            </li>
            <li>
              Federasyonun amaçlarını gerçekleştirmek için geçici veya sürekli
              çalışma kolları kurmak veya bu kolların çalışmalarını sona
              erdirmek.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Yönetim Kurulunun Yedek Üyelerle Tamamlanamaması
          </h3>
          <p>
            Madde:17– Yönetim kurulu üye sayısı, boşalmalar sebebiyle
            yedeklerinden getirilmesinden sonra, üye tam sayısının yarısından
            aşağı düşerse, genel kurul mevcut yönetim kurulu üyeleri veya
            denetleme kurulu tarafından bir ay içinde toplantıya çağrılır.
            Çağrının yapılmazsa üyelerden birinin istemi üzerine sulh hakimi üç
            üyeyi genel kurulu toplantıya çağırmakla görevlendirir.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Denetleme Kurulu</h3>
          <p>
            Madde 18 – Denetleme kurulu 3 Asıl 3 Yedek üye olmak üzere genel
            kurulca seçilir.
          </p>
          <p>Denetleme Kurulunun görevleri:</p>
          <ol className="list-inside list-decimal">
            <li>
              En geç 12 ayda bir ve belirsiz zamanlarda federasyonun bütün hesap
              ve işlemlerini yönetim kurulunun işlem ve faaliyetlerini,
              federasyonun mali durumunu incelemek ve denetlemek.
            </li>
            <li>
              Denetim sonucu düzenlenecek raporları yönetim kuruluna ve genel
              kurul toplantısından önceki hazırlanacak yıllık raporları genel
              kurula sunmak.
            </li>
            <li>Gerektiğinde genel kurulu toplantıya çağırmak.</li>
          </ol>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Federasyon Meclisi</h3>
          <p>
            Madde 19 – Federasyon meclisi; mevcut federasyon asil ve yedek
            yönetim kurulu üyeleri ile üye derneklerin yönetim kurulu
            başkanlarından oluşur. Ayrıca federasyonun kuruluşundan itibaren
            görev yapan tüm federasyon başkanı ve başkan yardımcıları federasyon
            meclisinin doğal üyeleridir. Federasyon meclis başkanı, daha önce
            federasyonda görev yapmış başkan ve başkan yardımcıları içinden
            federasyon meclisinin ilk toplantısında federasyon meclisi üyeleri
            tarafından seçilir. Federasyon Meclisi ve oluşturulacak diğer
            organlar, 6 ayda bir belirlenen bir mekanda yada online ortamda
            toplanır. Federasyon Yönetim Kurulunun ve başkanın çağrısı ya da
            üyelerin beşte birinin isteği üzerine olağanüstü toplanır. Toplantı
            gündemi, yönetim kurulu ve dernek yönetimlerinin önerileri
            doğrultusunda meclis başkanı tarafından belirlenir. Toplantıda,
            dönem içindeki çalışmalar değerlendirilir, gelecekte yapılması
            gereken işler saptanır. Kararlarını oy çokluğu ile alır. Fesih ve
            tüzük değişikliği dışındaki konularda alacağı tavsiye kararları,
            öncelikle yerine getirilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Federasyonun Borçlanma Usulleri
          </h3>
          <p>
            Madde 21- Federasyon amacını gerçekleştirmek ve faaliyetlerini
            yürütebilmek için ihtiyaç duyulması halinde Genel Kurul kararı ile
            borçlanma yapabilir. Bu borçlanma kredili mal ve hizmet alımı
            konularında olabileceği gibi nakit olarak ta yapılabilir. Ancak bu
            borçlanma, Federasyon gelir kaynakları ile karşılanamayacak
            miktarlarda ve Federasyon ödeme güçlüğüne düşürecek nitelikte
            yapılamaz.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Üyelerin Ödeyecekleri Giriş Ve Yıllık Aidat Miktarının Belirlenme
            Şekli
          </h3>
          <p>
            Madde 22-Üyelerin ödeyecekleri giriş ve yıllık aidat miktarları
            genel kurul tarafından belirlenir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Federasyon Gelirleri</h3>
          <p>Madde 23- Federasyon gelir kaynakları </p>
          <ol className="list-inside list-decimal">
            <li>Üye aidatı ve giriş aidatı</li>
            <li>
              Federasyonca yapılan yayınlar, tertiplenen piyango, balo, eğlence,
              temsil, konser, spor yarışması ve konferans gibi faaliyetlerden
              sağlanan gelirler.
            </li>
            <li>Federasyonun mal varlığından elde edilen gelirler</li>
            <li>Bağışlar ve yardımlar</li>
            <li>
              Yardım toplama hakkındaki mevzuat hükümlerine uygun olarak
              toplanacak bağış ve yardımlardan oluşur.
            </li>
          </ol>
          <p>
            Federasyon mülki idare amirliğine önceden bildirimde bulunmak
            şartıyla yurt dışındaki kişi, kurum ve kuruluşlardan ayni ve nakdi
            yardım alabilirler. Nakdi yardımların bankalar aracılığıyla alınması
            zorunludur.
          </p>
          <p>
            Yıllık aidat: Her üye derneğin üyeliğinin devamı süresince Genel
            Kurul katılımcılarının her biri için her yıl ödeyeceği zorunlu
            ödentidir. Üye dernekler federasyon genel kuruluna katılma hakkı
            olan her bir üyesi için 12 TL yıllık aidat ödemek zorundadır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Defter Ve Kayıtlar</h3>
          <p>Defter tutma esasları;</p>
          <p>
            Federasyonda, işletme hesabı esasına göre defter tutulur. Ancak,
            yıllık brüt gelirin Dernekler Yönetmeliğinin 31. Maddesinde
            belirtilen haddi aşması durumunda takip eden hesap döneminden
            başlayarak bilanço esasına göre defter tutulur.
          </p>
          <p>
            Bilanço esasına geçilmesi durumunda, üst üste iki hesap döneminde
            yukarıda belirtilen haddin altına düşülürse, takip eden yıldan
            itibaren işletme hesabı esasına dönülebilir.{" "}
          </p>
          <p>
            Yukarıda belirtilen hadde bağlı kalmaksızın yönetim kurulu kararı
            ile bilanço esasına göre defter tutulabilir.
          </p>
          <p>
            Federasyonun ticari işletmesi açılması durumunda, bu ticari işletme
            için, ayrıca Vergi Usul Kanunu hükümlerine göre defter tutulur.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Kayıt Usulü</h3>
          <p>Federasyonda, aşağıda yazılı defterler tutulur.</p>
          <p>
            a) İşletme hesabı esasında tutulacak defterler ve uyulacak esaslar
            aşağıdaki gibidir:
          </p>
          <ol className="list-inside list-decimal">
            <li>
              Karar Defteri: Yönetim kurulu kararları tarih ve numara sırasıyla
              bu deftere yazılır ve kararların altı toplantıya katılan üyelerce
              imzalanır.
            </li>
            <li>
              Üye Kayıt Defteri: Federasyona üye olarak girenlerin kimlik
              bilgileri, federasyona giriş ve çıkış tarihleri bu deftere
              işlenir. Üyelerin ödedikleri giriş ve yıllık aidat miktarları bu
              deftere işlenebilir.
            </li>
            <li>
              Evrak Kayıt Defteri: Gelen ve giden evraklar, tarih ve sıra
              numarası ile bu deftere kaydedilir. Gelen evrakın asılları ve
              giden evrakın kopyaları dosyalanır. Elektronik posta yoluyla gelen
              veya giden evraklar çıktısı alınmak suretiyle saklanır.
            </li>
            <li>
              İşletme Hesabı Defteri: Federasyon adına alınan gelirler ve
              yapılan giderler açık ve düzenli olarak bu deftere işlenir.
            </li>
          </ol>
          <p>
            b) Bilanço esasında tutulacak defterler ve uyulacak esaslar
            aşağıdaki gibidir:
          </p>
          <ol className="list-inside list-decimal">
            <li>
              (a) bendinin 1, 2 ve 3 üncü alt bentlerinde kayıtlı defterler
              bilanço esasında defter tutulması durumunda da tutulur.
            </li>
            <li>
              Yevmiye Defteri ve Büyük Defter: Bu defterlerin tutulma usulü ile
              kayıt şekli Vergi Usul Kanunu ile bu Kanununun Maliye Bakanlığına
              verdiği yetkiye istinaden yayımlanan Muhasebe Sistemi Uygulama
              Genel Tebliğleri esaslarına göre yapılır.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Federasyon Gelir ve Gider İşlemleri
          </h3>
          <p>Madde 25-Gelir ve gider belgeleri;</p>
          <p>
            Federasyon gelirleri, “Alındı Belgesi” ile tahsil edilir. Federasyon
            gelirlerinin bankalar aracılığı ile tahsili halinde banka tarafından
            düzenlenen dekont veya hesap özeti gibi belgeler alındı belgesi
            yerine geçer. Federasyon giderleri ise fatura, perakende satış fişi,
            serbest meslek makbuzu gibi harcama belgeleri ile yapılır. Ancak
            federasyonun, Gelir Vergisi Kanunu’nun 94’üncü maddesi kapsamında
            bulunan ödemeleri için Vergi Usul Kanunu hükümlerine göre gider
            pusulası, bu kapsamda da bulunmayan ödemeleri için “Gider Makbuzu”
            düzenlenir. Federasyon tarafından kişi, kurum veya kuruluşlara
            yapılacak bedelsiz mal ve hizmet teslimleri “Ayni Yardım Teslim
            Belgesi” ile yapılır. Kişi, kurum veya kuruluşlar tarafından
            federasyona yapılacak bedelsiz mal ve hizmet teslimleri ise “Ayni
            Bağış Alındı Belgesi” ile kabul edilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Alındı Belgeleri</h3>
          <p>
            Madde 26- Federasyon gelirlerinin tahsilinde kullanılacak “Alındı
            Belgeleri” yönetim kurulu kararıyla, matbaaya bastırılır.
          </p>
          <p>
            Alındı belgelerinin bastırılması ve kontrolü, matbaadan teslim
            alınması, deftere kaydedilmesi, eski ve yeni saymanlar arasında
            devir teslimi ve alındı belgesi ile federasyon adına gelir tahsil
            edecek kişi veya kişiler tarafından bu alındı belgelerinin
            kullanımına ve toplanılan gelirlerin teslimine ilişkin hususlarda
            Dernekler Yönetmeliğinin ilgili hükümlerine göre hareket edilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Yetki Belgesi</h3>
          <p>
            Madde 27- Yönetim kurulu asıl üyeleri hariç, federasyon adına gelir
            tahsil edecek kişi veya kişiler, yetki süresi de belirtilmek
            suretiyle, yönetim kurulu kararı ile tespit edilir. Gelir tahsil
            edecek kişilerin açık kimliği, imzası ve fotoğraflarını ihtiva eden
            (Dernekler Yönetmeliği Ek-19’da yer alan) “Yetki Belgesi” federasyon
            tarafından iki nüsha olarak düzenlenerek, federasyon yönetim kurulu
            başkanınca onaylanır. Yönetim kurulu asıl üyeleri yetki belgesi
            olmadan gelir tahsil edebilir.
          </p>
          <p>
            Yetki belgelerinin süresi yönetim kurulu tarafından en çok bir yıl
            olarak belirlenir. Süresi biten yetki belgeleri birinci fıkraya göre
            yenilenir. Yetki belgesinin süresinin bitmesi veya adına yetki
            belgesi düzenlenen kişinin görevinden ayrılması, ölümü, işine veya
            görevine son verilmesi gibi hallerde, verilmiş olan yetki
            belgelerinin federasyon yönetim kuruluna bir hafta içinde teslimi
            zorunludur. Ayrıca, gelir toplama yetkisi yönetim kurulu kararı ile
            her zaman iptal edilebilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Gelir ve Gider Belgelerinin Saklama Süresi;
          </h3>
          <p>
            Madde 28-Defterler hariç olmak üzere, Federasyon tarafından
            kullanılan alındı belgeleri, harcama belgeleri ve diğer belgeler
            özel kanunlarda belirtilen süreler saklı kalmak üzere,
            kaydedildikleri defterlerdeki sayı ve tarih düzenine uygun olarak 5
            yıl süreyle saklanır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Beyanname Verilmesi</h3>
          <p>
            Madde 29- Federasyon, bir önceki yıla ait faaliyetleri ile gelir ve
            gider işlemlerinin yılsonu itibarıyla sonuçlarına ilişkin
            “Federasyon Beyannamesi” Federasyon yönetim kurulu tarafından
            doldurarak, her takvim yılının ilk dört ayı içinde dernek başkanı
            tarafından mahallin mülki idare amirliğine verilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Bildirim Yükümlülüğü </h3>
          <p>
            Olağan veya olağanüstü genel kurul toplantılarını izleyen otuz gün
            içinde, yönetim ve denetim kurulları ile diğer organlara seçilen
            asıl ve yedek üyeleri içeren (Dernekler Yönetmeliği Ek-3’te yer
            alan) Genel Kurul Sonuç Bildirimi mülki idare amirliğine verilir.
            Genel kurul toplantısında tüzük değişikliği yapılması halinde; genel
            kurul toplantı tutanağı, tüzüğün değişen maddelerinin eski ve yeni
            şekli, her sayfası yönetim kurulu üyelerinin salt çoğunluğunca
            imzalanmış federasyon tüzüğünün son şekli, bu fıkrada belirtilen
            süre içinde mülki idare amirliğine verilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Taşınmazların Bildirilmesi</h3>
          <p>
            Madde 31- Federasyon edindiği taşınmazlar tapuya tescilinden
            itibaren otuz gün içinde “Taşınmaz Mal Bildirimi” ni doldurmak
            suretiyle mülki idare amirliğine bildirilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Yurtdışından Yardım Alma Bildirimi
          </h3>
          <p>
            Madde 32- Federasyon tarafından, yurtdışından yardım alınacak olması
            durumunda yardım alınmadan önce (Dernekler Yönetmeliği EK-4’te
            belirtilen) “Yurtdışından Yardım Alma Bildirimi” doldurup mülki
            idare amirliğine bildirimde bulunulur. Nakdi yardımların bankalar
            aracılığıyla alınması ve kullanılmadan önce bildirim şartının yerine
            getirilmesi zorunludur.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Kamu Kurum ve Kuruluşları İle Birlikte Yürütülen Ortak Projelerle
            ilgili Bildirim
          </h3>
          <p>
            Madde 33- Federasyon görev alanına ilişkin konularda kamu kurum ve
            kuruluşları ile yürüttüğü ortak projelerle ilgili olarak yapılan
            protokol ve projenin örneği “Proje Bildirimi”ne eklenerek, protokol
            tarihini izleyen bir ay içinde federasyon merkezinin bulunduğu yerin
            valiliğine verilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Değişikliklerin Bildirilmesi
          </h3>
          <p>
            Madde 34- Federasyon yerleşim yerinde meydana gelen değişiklik
            “Yerleşim Yeri Değişiklik Bildirimi”; genel kurul toplantısı dışında
            federasyon organlarında meydana gelen değişiklikler “Federasyon
            Organlarındaki Değişiklik Bildirimi” doldurulmak suretiyle,
            değişikliği izleyen otuz gün içinde mülki idare amirliğine
            bildirilir. Federasyon tüzüğünde yapılan değişiklikler de tüzük
            değişikliğinin yapıldığı genel kurul toplantısını izleyen otuz gün
            içinde, genel kurul sonuç bildirimi ekinde mülki idare amirliğine
            bildirilir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Federasyonun Harcamaları</h3>
          <p>
            Madde 35- Federasyonun bütün harcamaları yönetim kurulu kararı ile
            yapılır. Ancak ivedi durumlarda başkan, yönetim kurulunca önceden
            belli edilecek harcamaları kendiliğinden yapabilir. Bu şekilde
            yapılan harcamalar ilk yönetim kurulu toplantısında karara bağlanır.
            Federasyonun paraları milli bankalarda Federasyon adına açılacak
            hesaplarda saklanır. Bu hesaptan para çekmek veya bir yere para
            göndermek başkan veya başkan vekili ile saymanın çift imzası ile
            mümkündür. Federasyon adına gelir tahsil etmekle yetkili olan
            kişiler, tahsil ettikleri paraları otuz gün içerisinde dernek
            saymanına teslim ederler veya derneğin banka hesabına yatırırlar.
            Ancak tahsilatı Dernekler Mevzuatında belirtilen miktarı geçenler,
            otuz günlük süreyi beklemeksizin tahsil ettikleri parayı en geç iki
            iş günü içinde federasyon saymanına teslim ederler veya federasyonun
            banka hesabına yatırırlar. Federasyon kasasında bulundurulabilecek
            para miktarı, ihtiyaçlar dikkate alınarak yönetim kurulunca
            belirlenir.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Federasyonun İç Denetim Şekilleri
          </h3>
          <p>
            Madde 36-Federasyonda iç denetim esastır. Genel kurul, yönetim
            kurulu veya denetim kurulu tarafından iç denetim yapılabileceği
            gibi, bağımsız denetim kuruluşlarına da denetim yaptırılabilir.
            Genel kurul, yönetim kurulu veya bağımsız denetim kuruluşlarınca
            denetim yapılmış olması, denetim kurulunun yükümlülüğünü ortadan
            kaldırmaz. Denetim kurulu; federasyonun, tüzüğünde gösterilen amaç
            ve amacın gerçekleştirilmesi için sürdürüleceği belirtilen çalışma
            konuları doğrultusunda faaliyet gösterip göstermediğini, defter,
            hesap ve kayıtların mevzuata ve federasyon tüzüğüne uygun olarak
            tutulup tutulmadığını, federasyon tüzüğünde tespit edilen esas ve
            usullere göre ve bir yılı geçmeyen aralıklarla denetler. Denetim
            sonuçlarını bir rapor halinde yönetim kuruluna ve toplandığında
            genel kurula sunar. Denetim kurulu üyelerinin istemi üzerine, her
            türlü bilgi, belge ve kayıtların federasyon yetkilileri tarafından
            gösterilmesi veya verilmesi, yönetim yerleri, müesseseler ve
            eklentilerine girme isteğinin yerine getirilmesi zorunludur.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Tüzüğün Ne Şekilde Değiştirileceği
          </h3>
          <p>
            Genel kurulda tüzük değişikliği yapılabilmesi için federasyona
            katılma hakkı bulunan üyelerin 2/3 çoğunluğu aranır. Çoğunluğun
            sağlanamaması sebebiyle toplantının ertelenmesi durumunda ikinci
            toplantıda çoğunluk aranmaz. Ancak, bu toplantıya katılan üye
            sayısı, yönetim ve denetim kurulları üye tam sayısından az olamaz.
            Tüzük değişikliği için gerekli olan karar çoğunluğu toplantıya
            katılan ve oy kullanma hakkı bulunan delegelerin oylarının
            2/3’ü’dür. Genel kurulda tüzük değişikliği oylaması açık olarak
            yapılır.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">
            Federasyonun Feshi Halinde Mal Varlığının Tasfiye Şekli
          </h3>
          <p>
            Madde 38-Federasyon Genel Kurulu her zaman federasyonun feshine
            karar verebilir. Genel kurulun federasyonun fesline karar
            verebilmesi için, tüzüğe göre federasyona katılma hakkı bulunan
            üyelerin en az üçte ikisinin toplantıda hazır bulunması şarttır. İlk
            toplantıda bu çoğunluğun sağlanmaması halinde üyeler ikinci
            toplantıya çağırılır, ikinci toplantıya katılan üye sayısı yönetim
            ve denetim kurulları üye tam sayısının iki katından az olamaz. Feshe
            ilişkin kararın toplantıda hazır bulunan üyelerin üçte iki çoğunluğu
            ile verilmesi zorunludur. Federasyonun feshi yönetim kurulu
            tarafından mahallin en büyük mülki amirliğine yazıyla bildirilir.
            Fesih kararı ile birlikte federasyonun mal varlığının genel kurulun
            alacağı karar doğrultusunda tasfiyesi yapılır.
          </p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Tasfiye İşlemleri</h3>
          <p>
            Genel kurulca fesih kararı verildiğinde, federasyonun para, mal ve
            haklarının tasfiyesi son yönetim kurulu üyelerinden oluşan tasfiye
            kurulunca yapılır. Bu işlemlere, feshe ilişkin genel kurul kararının
            alındığı veya kendiliğinden sona erme halinin kesinleştiği tarihten
            itibaren başlanır. Tasfiye süresi içinde bütün işlemlerde federasyon
            adında “Tasfiye Halinde Yazılımcılar Federasyonu” ibaresi
            kullanılır. Tasfiye kurulu, mevzuata uygun olarak federasyonun para,
            mal ve haklarının tasfiyesi işlemlerini baştan sonuna kadar
            tamamlamakla görevli ve yetkilidir. Bu kurul, önce federasyonun
            hesaplarını inceler. İnceleme esnasında federasyona ait defterler,
            alındı belgeleri, harcama belgeleri, tapu ve banka kayıtları ile
            diğer belgelerinin tespiti yapılarak varlık ve yükümlülükleri bir
            tutanağa bağlanır. Tasfiye işlemeleri sırasında federasyonun
            alacaklılarına çağrıda bulunulur ve varsa malları paraya çevrilerek
            alacaklılara ödenir. Federasyonun alacaklı olması durumunda
            alacaklar tahsil edilir. Alacakların tahsil edilmesi ve borçların
            ödenmesinden sonra kalan tüm para, mal ve hakları, genel kurulda
            belirlenen yere devredilir. Genel kurulda, devredilecek yer
            belirlenmemişse federasyona kayıtlı bulunan üye derneklere eşit
            olarak devredilir. Tasfiyeye ilişkin tüm işlemler tasfiye
            tutanağında gösterilir ve tasfiye işlemleri, mülki idare
            amirliklerince haklı bir nedene dayanılarak verilen ek süreler hariç
            üç ay içinde tamamlanır. Federasyonun para, mal ve haklarının
            tasfiye ve intikal işlemlerinin tamamlanmasını müteakip tasfiye
            kurulu tarafından durumun yedi gün içinde bir yazı ile federasyon
            merkezinin bulunduğu yerin mülki idare amirliğine bildirilmesi ve bu
            yazıya tasfiye tutanağının da eklenmesi zorunludur. Federasyonun
            defter ve belgelerini tasfiye kurulu sıfatıyla son yönetim kurulu
            üyeleri saklamakla görevlidir. Bu görev, bir yönetim kurulu üyesine
            de verilebilir. Bu defter ve belgelerin saklanma süresi beş yıldır.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-semibold text-lg">Hüküm Eksikliği</h3>
          <p>
            Madde 39-Bu tüzükte belirtilmemiş hususlarda Dernekler Kanunu, Türk
            Medeni Kanunu ve bu Kanunlara atfen çıkartılmış olan Dernekler
            Yönetmeliği ve ilgili diğer mevzuatın dernekler hakkındaki hükümleri
            uygulanır.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tuzuk;
