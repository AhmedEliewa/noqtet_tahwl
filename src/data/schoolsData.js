const schools = [
  {
    id: 1,
    name: "مدرسة المهندس ابراهيم عثمان الثانوية الصناعية بالاسماعيليه ",
    address: "شارع المدارس، الإسماعيلية، مصر",
    governorate: "الإسماعيلية",
    specialization: [
      "قسم اللحام ",
      "قسم التبريد و التكييف ",
      "قسم السيارات و المعدات الحديثة  ",
      "قسم ل بناء السفن ",
    ],
    phone: "01224854454",

    website: "https://www.facebook.com/AbrahemOsmanSchool/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/359812137_755897809875727_3811369530204143232_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ySDjtZyJjZMQ7kNvwGEIMcZ&_nc_oc=AdlfBfuT_0_5QHnx-_dy5U3VCgDQC3dDi4_vdJa0uV3wq66I5_6PIrlhtwsXW0-63CU&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=60UTmEzGu1OV-bdtAcIh1A&oh=00_AfF2NO40px6Wbjq74kFe3CshF_OU1OizI_wIfPdx82_2yw&oe=680C44CA",
    map_link: "https://maps.app.goo.gl/XLTqWHSfz6RKtfD1A?g_st=aw",
    description:
      "هي مؤسسة تعليمية تقع في محافظة الإسماعيلية، مصر، وتقدم تعليمًا صناعيًا بنظام عسكري ",
  },
  {
    id: 2,
    name: "المدرسة الفنية التجريبية المتقدمة لتكنولوجيا المعلومات بالاسماعيليه ",
    address: "وتقع في منطقة الخامسة بمدينة الإسماعيلية",
    governorate: "الإسماعيلية",
    specialization: ["تكنولوجيا المعلومات ", "علوم الحاسب "],
    phone: "",
    email: "",
    website: "https://www.facebook.com/share/1AXLzF1f6u/?mibextid=qi2Omg",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description:
      " هي مؤسسة تعليمية متخصصة في مجال تكنولوجيا المعلومات وعلوم الحاسب، وتقع في منطقة الخامسة بمدينة الإسماعيلية.-	نوع التعليم: نظام داخلي لمدة 5 سنوات، يتضمن 3 سنوات دراسة عامة تليها سنتان تخصصية في مجالات البرمجيات، المنظومات، والشبكات",
  },
  {
    id: 3,
    name: "مدرسة أبو عطوة الثانوية الصناعية ـ بنات بالاسماعيليه  (جيل المستقبل)",
    address: "",
    governorate: "الإسماعيلية",
    specialization: ["اقسام قسم الكترونيات "],
    phone: "",
    email: "",
    website: "https://www.facebook.com/share/16Vd9VqEFZ/?mibextid=qi2Omg",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/305198645_481321980668100_6512523688680080157_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=x6CwQ5gRWkYQ7kNvwF0Hi3D&_nc_oc=AdkGXscP47BOP9HkhnxBO6xNKHi3dY885z6JMzg1W6W0tzjXwivoxRxpeij_CgSn2ic&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=RCswCRbVzw6X6iNYNJ3CpA&oh=00_AfF8T_ODN61DjmLerHKNvJIRFAxRATCLC6eGLjAZGNOo6A&oe=680C70B7",
    map_link: "https://maps.app.goo.gl/4FhgiLkgocErfieQ7?g_st=aw",
    description: "",
  },
  {
    id: 4,
    name: "مدرسة الإسماعيلية المعمارية الصناعية العسكرية بنين",
    address: "محافظة الإسماعيلية، مصر",
    governorate: "الإسماعيلية",
    specialization: "",
    phone: "",
    website: "https://www.facebook.com/share/1XgPjvBT93/?mibextid=qi2Omg",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/269780298_305619001453297_2174083739238748345_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=65yDenJIdREQ7kNvwHYiVZv&_nc_oc=Adk-ypA3_hddymNnidgN0iGtH4QUJCqmQ5uvc-LeHUuSw5aFweIDQBcB6yDA4pzbEN8&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=KNgGZCFCdyqHvYz88Vzkdw&oh=00_AfGWCM2gJgCp8fm8KRk10O6zmtDRO3VePoGqwVrk6AxNEg&oe=680C6C96",
    map_link: "https://maps.app.goo.gl/JBwA5NTtC8HwzvUm7?g_st=aw",
    description:
      "هي مدرسة ثانوية فنية متخصصة في المجال المعماري والصناعي، وتتميز بطابعها العسكري",
  },
  {
    id: 5,
    name: "مدرسه الثانويه الفنيه الصناعيه للمعدات الثقيله بالاسماعيليه ",
    address: "شارع العشرين، الإسماعيلية، مصر",
    governorate: "الإسماعيلية",
    specialization: [
      "قسم المعدات الثقيلة ",
      "قسم اللوجيستيات ",
      "تشغيل المعادن ",
      "تشكيل ولحامل معادن ",
    ],
    phone: "",
    website: "https://www.facebook.com/share/17zxCqbubJ",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/244233018_4337900886300382_3972799551740196139_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eUzlzrXW0r4Q7kNvwE8XEJC&_nc_oc=AdnLTK_crnGqZh_apQCqrpzz3wR-A6GIBXis6DNGwSfAmu7UsDR_qNuNGUQT8Z-Fgl8&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=8VxkJc_3Pmk6PWoZTYyoUA&oh=00_AfEWqV3p4URpD_Xfjjg0PeRB6aOcor1b0THqp7XHVBmfzg&oe=680C592D",
    map_link: "https://maps.app.goo.gl/N6vEScQqZv7M8TR56?g_st=aw",
    description:
      "  من اهم المدارس الفنيه على مستوى الجمهوريه هي مؤسسة تعليمية متخصصة في تدريب الطلاب على صيانة وتشغيل المعدات الثقيلة، مع التركيز على الجانب العسكري",
  },
  {
    id: 6,
    name: "مدرسة فايد الثانوية الصناعية بنين مدرسة فايد الثانوية الصناعية بنين، فايد",
    address: "تقع في مدينة فايد بمحافظة الإسماعيلية",
    governorate: "الإسماعيلية",
    specialization: [
      "قسم المعدات الثقيلة ",
      "قسم اللوجيستيات ",
      "تشغيل المعادن ",
      "تشكيل ولحامل معادن ",
    ],
    phone: "",
    website: "https://www.facebook.com/share/15wMbq73qC/?mibextid=qi2Omg",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/302105373_451607746981464_6371050783053804522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pnn0ky37eaMQ7kNvwH9g1Ej&_nc_oc=AdnPkOzXa4d-wPmR3PNkpAsJql1UlFjChg_zag0MGQi5Q6SIDVsLVXqZFMlwBosN_38&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=WriS8ZBq2NV_dEF2Mo1dhQ&oh=00_AfH_v-1NjDO2PaGc8YhxR1EEQjyH5qQgujWMKY2MM3HeyQ&oe=680C661A",
    map_link: "https://maps.app.goo.gl/3EjRtcG6M9RGuagi6?g_st=aw",
    description: "  وتقدم تعليمًا صناعيًا للطلاب الذكور",
  },
  {
    id: 7,
    name: "مدرسة القنطرة شرق الصناعية المشتركة، القنطرة شرق، الإسماعيلية",
    address: "تقع في مدينة القنطرة شرق بمحافظة الإسماعيلية",
    governorate: "الإسماعيلية",
    specialization: [
      "الكترونيات صناعية",
      "ميكانيكا صيانة وإصلاح",
      "تركيبات كهربائية",
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkKqlVMCUOzlYlY3kftRX7bIkwMpCFoZq5w&s",
    map_link: "",
    description:
      "  هي مؤسسة تعليمية فنية تقع في مدينة القنطرة شرق بمحافظة الإسماعيلية، مصر. تقدم المدرسة تعليمًا مزدوجًا في مجال المهن الصناعية، حيث تجمع بين الدراسة النظرية والتدريب العملي",
  },
  {
    id: 8,
    name: "مدرسه السلام الزخفيه العسكريه بنين بالاسماعيليه ",
    address: "تقع على الطريق الدائري بمنطقة عز الدين بمحافظة الإسماعيلية",
    governorate: "الإسماعيلية",
    specialization: ["تجاره اثاث", "زغف واعلان", "زغف واعلان"],
    phone: "",
    website: "https://www.facebook.com/share/17zxCqbubJ",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkKqlVMCUOzlYlY3kftRX7bIkwMpCFoZq5w&s",
    map_link: "https://maps.app.goo.gl/pEhhQ3HKY7dZox3X9?g_st=aw",
    description: "",
  },
  {
    id: 9,
    name: "مدرسة إيجيبت جولد للتكنولوجيا التطبيقية",
    address: "مدينة العبور، محافظة القليوبية",
    governorate: "القليوبية",
    specialization: ["تكنولوجيا صناعة الحلي والمجوهرات"],
    phone: "01200018136",
    website: "https://www.facebook.com/EgyptGoldSchool/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/348419696_1584402208748670_3924617359323338665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IVXJ2Jk98J8Q7kNvwFVTo4W&_nc_oc=Adm6v5Hjmwv23II4APwhkrSS-3nWTcQd9xXq2pOquse0d0CBFBw60PMOnB2hZHoaAs8&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=tsirX-O8mCXlb_qxTXnVlA&oh=00_AfHikIk1Dar3KxM3wWlIHKpwltSsyWimPurBUAP_6fOArA&oe=680C4CEA",
    map_link: "",
    description: "",
  },
  {
    id: 10,
    name: "مدرسة ماونتن فيو الدولية للتكنولوجيا التطبيقية",
    address: "مدينة العبور، محافظة القليوبية",
    governorate: "القليوبية",
    specialization: ["تعلم اداره المنشات"],
    phone: "01064216153",
    website:
      "https://www.facebook.com/profile.php?id=100095141354560&mibextid=wwXIfr&mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/363737580_266611729411916_6148968729850303355_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IZiakUt0Y9IQ7kNvwGgaGq2&_nc_oc=AdlGlGNHYKkXqmuAqeuI3-5MT3q4p6LIUvVdadrBIOsZWCm7jDp33TfC0JteO0WaVMM&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=e6mE-lBGi_8FkVsU-fH7yw&oh=00_AfEo7DfM7dlqvIO65G-34cwCCzDoxGNrIN2qvFSBNYjRKw&oe=680C6ABC",
    map_link: "",
    description: "",
  },
  {
    id: 11,
    name: "مدرسة أبو زعبل للتكنولوجيا التطبيقية",
    address: "الخانكة، محافظة القليوبية",
    governorate: "القليوبية",
    specialization: ["إنتاج الصناعات الكيماوية والأسمدة الفوسفاتية"],
    phone: "",
    website:
      "https://www.facebook.com/p/%D9%85%D8%AF%D8%A7%D8%B1%D8%B3-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%81%D9%86%D9%8A-%D9%84%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%A8%D9%88%D8%B2%D8%B9%D8%A8%D9%84-%D9%84%D9%84%D8%A3%D8%B3%D9%85%D8%AF%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D9%83%D9%8A%D9%85%D8%A7%D9%88%D9%8A%D8%A9-Azfc-61557007004565/",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/450540157_122153923988233566_4262220915056507800_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KgCEN4m0XhEQ7kNvwEVzal6&_nc_oc=AdnxRQMHeUsJl3FjsmYQo9XgshAcRzG8mV_nBW5x33xsgvRp27_Co8i6nD2Q1CBShLE&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=-l72MDOCDFOoSz4sQkWVwQ&oh=00_AfFr1sqAyOSu07vNdII-UlXqzCGnrK5Lz6fctrlqBxIz4A&oe=680C5EE3",
    map_link: "",
    description: "",
  },
  {
    id: 12,
    name: "مدرسة WE للتكنولوجيا التطبيقية",
    address: "مدينة طوخ، محافظة القليوبية",
    governorate: "القليوبية",
    specialization: [
      "الاتصالات، شبكات وأمن المعلومات، تطوير المواقع والبرمجيات",
    ],
    phone: "01501112222",
    website: "https://www.facebook.com/share/1AD5qmd14P/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/254703982_109572444871158_1735240021513276497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KP8u6KQUpXsQ7kNvwH-CGVp&_nc_oc=AdmwS7QrpAI6Lx5haWdnnRwnr_bjPouvPXxiga9Io4acUpBd5bXCer14bxWTwA4iRr0&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=DdAXLH2ro5avMwDnOmsF2A&oh=00_AfGSwawlmRsCH1tKrCb9SfudLpiBW8SEHiTwSG4cx4ztfg&oe=680C7609",
    map_link: "",
    description: "",
  },
  {
    id: 13,
    name: "مدرسة مياه الشرب والصرف الصحي",
    address: "مسطرد  محافظة القليوبية",
    governorate: "القليوبية",
    specialization: ["تقنيات مياه الشرب والصرف الصحي"],
    phone: "0120028888",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: "",
  },
  {
    id: 14,
    name: "مدرسة WE للتكنولوجيا التطبيقية ",
    address: "مدينة الشهداء، محافظة السويس",
    governorate: "السويس",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "",
    website:
      "https://www.facebook.com/WeAppliedTechnologySchools?rdid=LlwhyDlfJznHUSn4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15xP5NCsz7%2F#",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/254703982_109572444871158_1735240021513276497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KP8u6KQUpXsQ7kNvwH-CGVp&_nc_oc=AdmwS7QrpAI6Lx5haWdnnRwnr_bjPouvPXxiga9Io4acUpBd5bXCer14bxWTwA4iRr0&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=tSfUZwxhNnN3mvJuuHaoGQ&oh=00_AfHGA4S5XEdsZlVyKH8nH5izjjSqS0jaWoaQpDoAli0MOg&oe=680C7609",
    map_link: "",
    description:
      "لتقديم متاح للبنين والبنات من محافظات: السويس، الإسماعيلية، بورسعيد، شمال سيناء، جنوب سيناء، البحر الأحمر ولا يزيد عمر المتقدم عن 18 عامًا",
  },
  {
    id: 15,
    name: "أكاديمية السويدي وبنك مصر الفنية",
    address: "منطقة السخنة المتكاملة، المنطقة الاقتصادية لقناة السويس",
    governorate: "السويس",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "",
    website:
      "https://www.facebook.com/elsewedytechnicalacademy?rdid=2vIKmsUHi9B6vjiy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15o2TFbhsd%2F#",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/348223624_1336632420599384_2246278138359471883_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OunaQ08RVJgQ7kNvwGoO3zw&_nc_oc=AdlqJFGhyhD1fVxCBTYAyowj_0IdLXXIM-93w8Y8Njw9NeMwajYSb_KCP6lAdaur1sk&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=XoeRtoQ7CphcdoNkJ1XPUA&oh=00_AfGcWJddsU5rtDsqtXGI3OLJ-SguMasJJzyHGC5zImkAtg&oe=680C7419",
    map_link: "",
    description:
      "تقديم برامج للتعليم الفني المزدوج والتدريب المهني للعمالة الفنية، وتأهيلها للعمل في المشروعات الصناعية داخل المنطقة الصناعية بالسخنة",
  },
  {
    id: 16,
    name: " WE لتكنولوجيا التطبيقية وتعرف ايضا ب اسم مدرسه عقبه بن نافع الثانويه الفنيه الصناعيه",
    address: "الشهداء بحي عتاقه",
    governorate: "السويس",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "",
    website:
      "https://www.facebook.com/WeAppliedTechnologySchools?mibextid=ZbWKwL",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/254703982_109572444871158_1735240021513276497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KP8u6KQUpXsQ7kNvwH-CGVp&_nc_oc=AdmwS7QrpAI6Lx5haWdnnRwnr_bjPouvPXxiga9Io4acUpBd5bXCer14bxWTwA4iRr0&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=S29BVpnfBqhfMXG98Wxf7w&oh=00_AfHE4MUnCk-YMIPIo-5_XD7DNHeQyDXGHsOC1b6Ja4DjQQ&oe=680C7609",
    map_link: "",
    description:
      "هدف الي تقديم تعليم تطبيقي متخصص في مجالات التكونولجيا والاتصالات وتزويد الطلاب بالمهارات الازمه لسوق العمل",
  },
  {
    id: 17,
    name: " مدرسة WE المشتركة للتكنولوجيا التطبيقية",
    address: "",
    governorate: "الإسكندرية",
    specialization: [
      " التخصصات: تكنولوجيا الاتصالات, تكنولوجيا الإلكترونيات, تكنولوجيا الكهرباء، تكنولوجياالمعلومات والحاسب",
    ],
    phone: "",
    website:
      "https://www.facebook.com/TelecomEgypt?mibextid=wwXIfr&rdid=16w1qtvtfd9FXRAU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAQQjGEG4%2F%3Fmibextid%3DwwXIfr#",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/81377424_10158265733011490_1938227141917278208_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0Q4qeXh_370Q7kNvwFcmnJA&_nc_oc=AdmK94HDjwUYbO0dKL2mrmc69n3aAixRI-T1epYkbCNX3ijbMortPYVSYLDqezKC2qc&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=igEHvyF1QYsUz7d5kZACLw&oh=00_AfHkDX9WdAYprXnCQMPfoS12J5XBhDesMSXNdECdVhlgOw&oe=682E1D34",
    map_link: "",
    description: "",
  },
  {
    id: 18,
    name: " مدرسة GIT للتكنولوجيا التطبيقية",
    address: "",
    governorate: "الإسكندرية",
    specialization: [
      "إنتاج وتجميع وصيانة الماكينات الصناعية، برمجة وتصنيع المواقع الإلكترونية، تحليل البيانات ",
    ],
    phone: "01112665444",
    website:
      "https://alexschools.info/school/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-git-%D9%84%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7-%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9/",
    image_url:
      "https://alexschools.b-cdn.net/wp-content/uploads/2021/09/201900074_157056773118938_3102084145672374168_n-1024x1024.jpeg",
    map_link: "",
    description: "",
  },
  {
    id: 19,
    name: "مدرسة مبارك كول الثانوية الصناعية المشتركة ",
    address: "برج العرب، الإسكندرية",
    governorate: "الإسكندرية",
    specialization: ["ميكانيكا صيانة، ميكانيكا تركيبات "],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNlD3sBeZlg6t3aXtAcBiW5jmkoOf7zz1lA&s",
    map_link: "",
    description: "",
  },
  {
    id: 20,
    name: "مدرسة المريم الثانوية الصناعية الفنية الحديثة",
    address:
      " 8 شارع بطليموس الفلكي، متفرع من طريق الكورنيش، سابا باشا، الإسكندرية`",
    governorate: "الإسكندرية",
    specialization: ["تقدم المدرسة برامج في المجالات الصناعية والفنية"],
    phone: "01222776761",
    website: "https://www.facebook.com/share/1HoZEVA1Ja/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/348505662_2917198975083675_8018531669762190632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-X9Ip43FpWEQ7kNvwFujyWF&_nc_oc=AdlyyacfMXhLe7Ic-YZgHXqtMTn39APJdE2JgbMEBdnCNVyqg_1MA2huYVwkE1EeJFI&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=RYH7l0rPTcSy08N-Lz6xFg&oh=00_AfHLqXHbbKLNIUHINbD1dUTQZwjxrT4TfKDUDQCIpJw2YA&oe=680C657D",
    map_link: "",
    description: "",
  },
  {
    id: 21,
    name: "مدرسة أبيس 4 الثانوية الصناعية",
    address: " أبيس 4،",
    governorate: "الإسكندرية",
    specialization: ["برامج تعليمية في المجالات الصناعية"],
    phone: "",
    website: "https://www.facebook.com/share/18rH72tnnT/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/347785563_627114109314503_8719625037327884359_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=56NkO6FZuvgQ7kNvwF8Y3zF&_nc_oc=AdlNAs5rEWEZxaSL2W_rD-G6b2uoyyl61Utju9GryOfjBSDh1XpJ8E_knqokKvG_6bs&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=KVhCOoB7XgY1b-sKQd1WtQ&oh=00_AfEacYW-5BIawoUcG9_bGCGdMTigmue26yfsr968XgUnzA&oe=680C5051",
    map_link: "",
    description: "",
  },
  {
    id: 22,
    name: "مدرسه فتح الله الدولية للتكنولوجيا التطبيقيه",
    address: "شارع ادمون فرمون بجوار كلية التمريض ، سموحه ",
    governorate: "الإسكندرية",
    specialization: ["برامج تعليمية في المجالات الصناعية"],
    phone: "",
    website: "https://www.facebook.com/share/1WggiXmBCg",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/294352892_103944559065035_2318679840757408766_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=axzOddwQHAkQ7kNvwHbNYkE&_nc_oc=AdlU7FbpQE4IMIJg-VR9JzoIiXDuQEyQG6p4b0y2Ctj45hAzecitkS8xlfvziAK3WOk&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=th3SgjwytrCuGEWBVdqJMA&oh=00_AfGjIg3xHZ4h5ua0cmsyMApMHE-KGk3mfP3Haw1JoTy9xg&oe=680C6990",
    map_link: "",
    description: "",
  },
  {
    id: 23,
    name: "مدرسه غبور للتكنولوجيا التطبيقيه",
    address:
      "مركز التدريب المهني للسيارات، محرم بيك ، شارع عبد المنعم رياض ، بجوار نادي الصيد",
    governorate: "الإسكندرية",
    specialization: [" مجال صناعه وصيانه السيارات"],
    phone: "0123442803",
    website: "https://www.facebook.com/share/1EmVDmzrTM",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/311879274_163085493020848_3554416114105963290_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Sm2q32oWdOoQ7kNvwGKm8b6&_nc_oc=AdnnD2s5UgasjLYRUTT2bL3LnIJiMB2oMKj4yB2UAwzUmMEDJ__NLBFNiYgtV2E5lT0&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=RC0I3or9Zkl1Kjd3WjOZvQ&oh=00_AfG5WDCLX7fe19JzCzRWSpwSODB2E9S2t2t44-Iu5CH-gg&oe=680C6038",
    map_link: "",
    description: "",
  },
  {
    id: 24,
    name: "مدرسة الإسكندرية الثانوية الصناعية للبترول والنقل البحري والصناعات المتقدمة",
    address: "",
    governorate: "الإسكندرية",
    specialization: ["تخصص الحاسب الآلي وهندسة الشبكات،"],
    phone: "01050008175",
    website: "https://www.facebook.com/share/12J15Ay9dE3/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/315528584_497603622405234_4382352196051441688_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=_ltmF7LeugsQ7kNvwFEPMJS&_nc_oc=AdlnCZkGjxkb-VKEkTb4C_Bh5sE1z9R0QcAtgD6G0sxHizr1QIFdl6TqmnZw6D_-Pp8&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=oaYLJj223qe3H_gVCQM89w&oh=00_AfGNliygYI3HlQLONkNystT9psycwU4lxKmvHIZzwlfTJQ&oe=680C61FB",
    map_link: "",
    description: "",
  },
  {
    id: 25,
    name: "مدرسة دمياط الجديدة للتكنولوجيا التطبيقية ",
    address: "مدينة دمياط الجديدة",
    governorate: "دمياط",
    specialization: ["تكنولوجيا تطبيقية"],
    phone: "01050008175",
    website:
      "https://www.facebook.com/groups/429796788691626/?ref=share&mibextid=KtfwRi",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/444490058_122100826256340534_5451379461419668915_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_ohc=P2pl_MxVun0Q7kNvwFeG3sP&_nc_oc=Adn1KXZVzvIGutizbwbnOuNtQhPTz_UrF4aAMZDtk-r6VS-L38t7qLHE7c2_pNXShkg&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=oPhAwkvGsNUJrmSeIOaJjA&oh=00_AfGl-VgJJEcviByBI4X-vmIlHT4osKkYzIEqDzHdIoyE0g&oe=680C67D0",
    map_link: "",
    description: "",
  },
  {
    id: 26,
    name: "مدرسة ابدأ الوطنية للعلوم التقنية",
    address: "مدينة دمياط الجديدة",
    governorate: "دمياط",
    specialization: ["تكنولوجيا تطبيقية"],
    phone: "01050008175",
    website: "https://www.facebook.com/ntss.eg/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuelxHZaTJabnDzgna825l_rEos6TVxGX7kg&s",
    map_link: "",
    description: "",
  },

  {
    id: 27,
    name: "مدرسة WE للتكنولوجيا التطبيقية",
    address: "شارع الدكتور، علي مشرفة، قسم دمياط، أول دمياط،",
    governorate: "دمياط",
    specialization: ["تكنولوجيا تطبيقية"],
    phone: "01050008175",
    website:
      "https://www.facebook.com/WeAppliedTechnologySchools/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/469356169_598954572599607_271596969905051399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Ug_MuIT4DJEQ7kNvwE81I7k&_nc_oc=AdmCLPNI0A8rGCA8WXKD99MZoGDJsSKsF4DPP_2gtSO9a5hfDrPNSkpPIVJLv6JftH4&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=xkAsaDTFVF0QkPvoXqShQA&oh=00_AfGolhlAtOefe8Fg8Qoo_Ptu-0qWiQDVct4elDMzIDnHtg&oe=680EC99E",
    map_link: "",
    description: "",
  },
  {
    id: 28,
    name: "مدرسة مها الفار الإلكترونية للبنات",
    address: "عزب البصارطة، مركز دمياط",
    governorate: "دمياط",
    specialization: [" إلتكترونيات للبنات"],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100083094854304&rdid=tK1Pt459mQYludyw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AKVeDfE8T%2F#",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/288698391_102503965842756_2641044818462283236_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XgtaZBc1KQAQ7kNvwFo71Pz&_nc_oc=AdlgM0KAx9MkQQwodqV90vyeScKl33eT4U14MNFoVpblRDog3l8vStTJUfql1YULXEM&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=OgZx8tiMs1QGofHXN8_kNA&oh=00_AfF6WpAFuPmdhOdtsj-ZCgw13WmmPEua08pvQSR9evNKkQ&oe=680C8734",
    map_link: "",
    description: "",
  },
  {
    id: 29,
    name: "مدرسة المهندس محمد حسن درة الإلكترونية للبنات",
    address: "",
    governorate: "دمياط",
    specialization: [" إلتكترونيات للبنات"],
    phone: "",
    website:
      "https://www.facebook.com/sohayeb.sa?rdid=urzT7h5Acxoc6KO8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15fa9QtkDX%2F#",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/246596763_340213704568523_46586891542375728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gUYFbK0tFOUQ7kNvwGnBdh3&_nc_oc=AdmMbvGLtFmZtV-tGvYtroTjSZHTZ-_stDYDxG7EggaK2iNluJwJ_jEjuy90ks_vka0&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=BcEDdDobqRtEyXfAgSlBFg&oh=00_AfGwWT2oqjvb0UgyTJaXxA5GbVhCT3RHaZZJoZn1mdB1sg&oe=680C8107",
    map_link: "",
    description: "",
  },
  {
    id: 30,
    name: "مدرسة شطا الفنية المتقدمة",
    address: "شطا",
    governorate: "دمياط",
    specialization: ["  تعليم فني متقدم"],
    phone: "",
    website:
      "https://www.facebook.com/sha6a5years?rdid=jO3IkTJehvFSgyh2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BSbCPjNF2%2F#",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/294720288_389502256581910_4219377438165786050_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BfTVwuLio7UQ7kNvwGKhnQN&_nc_oc=Adl8xTwKzw6ASoyKOUOxtt7baTnkiyh6OM8XoCtvdl0sIaIJ9q3lwgxvxUHib3XA2Qo&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=vwyoT6hpKqy-TgZojC6Dtg&oh=00_AfFgAtph7pFeDhoX2UmWQpClX_cP8vOV-kwWvCRzO8I4Jg&oe=680C5B14",
    map_link: "",
    description: "",
  },
  {
    id: 31,
    name: "مدرسة فارسكور الزخرفية بنين",
    address: "فارسكور",
    governorate: "دمياط",
    specialization: ["إدارات "],
    phone: "",
    website:
      "https://www.facebook.com/MdrstFarskwrAlthanwytAlzkhrfytBnyn?rdid=CK996rKRKLzbKLv6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16LHCS6RjV%2F#",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/471327177_905685758427018_1004915683352627862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lycdKQ5O2XcQ7kNvwFx6bbJ&_nc_oc=AdnQgCEbW30rjZMyT_ZfW1YFjA0eyZaHmCR3Q8sclO2pDXfaQDDrfK5ieSKVly90TmA&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=pErve0TqC7baz-SHP_0G_Q&oh=00_AfE2cytZq0kQsuY-nFO-ooCVNcEPiPMKuF5wFPdeNULnIA&oe=680C786F",
    map_link: "",
    description: "",
  },
  {
    id: 32,
    name: "مدرسة الدكتور رفعت المحجوب الصناعية المشتركة",
    address: "الزرقا",
    governorate: "دمياط",
    specialization: "",
    phone: "",
    website: "https://www.facebook.com/share/1Jfpjhjo6D/",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/299683451_525486309378922_6570314649083042725_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=f9YqtD2EHMkQ7kNvwHR23wf&_nc_oc=AdnAektoEqckG6ukqMOyemFNAFXDZacKeVLu_z3kC6qYdp0Ruc4LEunEbekbrQk0LTY&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=RWkAKacHzUDUKeuLAQgarQ&oh=00_AfF-ng4IMDahp-2jUwVjwuSsXHRLjrrjfq9GD6vVZTceyg&oe=680C66F7",
    map_link: "",
    description: "",
  },
  {
    id: 33,
    name: "مدرسة الرحامنة الصناعية بنين ",
    address: "الروضة",
    governorate: "دمياط",
    specialization: ["صناعي  "],
    phone: "",
    website:
      "https://www.facebook.com/photo/?fbid=701205748482567&set=a.701205721815903&locale=ar_AR",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/360145228_701205741815901_457668719638551508_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2gPqSJvaZu8Q7kNvwF-2Bmu&_nc_oc=AdmhE8tmyFaXFEpFGFcBbxvuNQY7Q4AuDFsJwpbdPObs8H3rDLJnrX9bM5iFV9AiLJs&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=C2EGeFT5jz13lMEkHSNMng&oh=00_AfEUuKlBEIy3063s0YdjU3roYVEh5UV7_uQpYuawSvswrQ&oe=680EB8E1",
    map_link: "",
    description: "",
  },
  {
    id: 34,
    name: "مدرسة كفر سعد الصناعية بنين ",
    address: "كفر سعد",
    governorate: "دمياط",
    specialization: ["صناعي  "],
    phone: "",
    website: "https://www.facebook.com/share/1BSZXf46Nm/",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/302006547_482589170649229_5702842175235373116_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pJRlQJm8Zx4Q7kNvwGAGHuz&_nc_oc=Adn1rYO0ZUm_r6j6qbFy2X6ibuFTpYmGFrfWsyc9hAKApWpSN1A2jwHFl_39pZ0d80w&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=CErF3Ad7ytEMs7W_Qj_feg&oh=00_AfHFrc6Svs5rWEwNgfV0pzhNSNkYwh7Gwi1CYpZxRyhU9w&oe=680C8D50",
    map_link: "",
    description: "",
  },
  {
    id: 35,
    name: "مدرسة دمياط الجديدة الصناعية المشتركة ",
    address: " دمياط الجديدة",
    governorate: "دمياط",
    specialization: ["صناعي  "],
    phone: "",
    website: "https://www.facebook.com/share/1ADSYEbNxv/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/486477211_1168837765037553_695899185935267240_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=msJfo24VeIQQ7kNvwGGlZm6&_nc_oc=AdkfN6JiQASka5y2_zjVFtx-Y1gJ3xjksK_TTpIpC0X7x37rwiW8j75QV0Qf2SR0Zf8&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=WaIq7KWbhdePmuyK4s_GxQ&oh=00_AfGWGD9YkuHk3M6CfS0hfr-duxDD9gVB3IhKpBQZODHnLw&oe=680C5BEF",
    map_link: "",
    description: "",
  },
  {
    id: 36,
    name: "مدرسة رأس البر البحرية بنين",
    address: " إدارة عزبة البرج",
    governorate: "دمياط",
    specialization: ["صناعات بحرية  "],
    phone: "",
    website: "https://www.facebook.com/share/1E6gakT7hb",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/342197856_260965633020703_618000646133413203_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KA7wxmiTH1IQ7kNvwG87FAR&_nc_oc=Adn0XbnniFpimxCfLkcGS9mn76w1RO00_Bi8SWIMHvoTBEV8b5E7OLLtNAlHEGvKLQw&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=vvS7Ug8u_B74CLup6M9rpw&oh=00_AfGYZEHk1cmLHjNxueYea753dXWeUpJCXP2v9FUotiN5vA&oe=680C93B9",
    map_link: "",
    description: "",
  },
  {
    id: 37,
    name: "مدرسة WE للتكنولوجيا التطبيقية",
    address: " كفر الشيخ",
    governorate: "كفر الشيخ",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "",
    website: "https://www.elwatannews.com/news/details/7397574",
    image_url:
      "https://media.elwatannews.com/media/img/mediaarc/large/4984685191623935468.jpg",
    map_link: "",
    description: "",
  },
  {
    id: 38,
    name: "Kafr El-Sheikh STEM School مدرسة المتفوقين للعلوم و التكنولوجيا بكفر الشيخ ",
    address: " كفر الشيخ",
    governorate: "كفر الشيخ",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "",
    website: "https://www.facebook.com/share/15w19BdfMz/?mibextid=qi2Omg ",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/318345645_108261075462132_8240369225643273635_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Ns2BMNxqmEQ7kNvwFAKAtN&_nc_oc=AdlgqQ4rG5UTXC8Omgue4jo1cN8ud0QFEDAVNJQSbLwMSszz6lH3ZAT_tc11hl1rvZE&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=xJOeLmo8vTpwHZrLJ4X1Ng&oh=00_AfHRXmTMCg6DJE0zVcJuLm3EDxikl68CA1qGoF8XfoIeZA&oe=680C93F7",
    map_link: "",
    description: "",
  },
  {
    id: 39,
    name: "مدرسة we للتكنولوجيا التطبيقية",
    address: " بالمنصورة ",
    governorate: "الدقهلية",
    specialization: ["اتصالات و شبكات وأمن المعلومات وتطوير مواقع وبرمجيات"],
    phone: "01010743088",
    website: " https://www.facebook.com/share/15RxCbr9um",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/254703982_109572444871158_1735240021513276497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KP8u6KQUpXsQ7kNvwH-CGVp&_nc_oc=AdmwS7QrpAI6Lx5haWdnnRwnr_bjPouvPXxiga9Io4acUpBd5bXCer14bxWTwA4iRr0&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=ihGaq_pGhOLcQFZfaewIVg&oh=00_AfHr0nHwA08yZzZJApJ6PQ5mFRhxH8CW83GCp4rjeJ1mqw&oe=680C7609",
    map_link: "",
    description:
      "في ضوء رؤية مصر 2030 لتطوير منظومة التعليم الفني والتدريب المهني من خلال سد الفجوة بين العملية التعليمية النظرية والاحتياجات الفعلية لسوق العمل، تم إطلاق أول مدارس ذكية متخصصة في مجال الاتصالات وتكنولوجيا المعلومات بالتعاون مع وزارة التربية والتعليم والتعليم الفني وتحت رعاية وزارة الاتصالات وتكنولوجيا المعلومات والتي تهدف إلى إعداد جيل من العمالة الفنية المؤهلة والقادرة على المنافسة بسوق الاتصالات المحلى والإقليمي والدولي من خلال تنمية مهاراتهم وإكسابهم الخبرة العملية اللازمة",
  },
  {
    id: 40,
    name: "مدرسة المتفوقين للعلوم و التكنولوجيا بالدقهلية ",
    address:
      "الطريق الساحلي الدولي، الحفير والأمل، مدينة جمصة، محافظة الدقهلية",
    governorate: "الدقهلية",
    specialization: [" الطاقة المتجددة والاتصالات والمعلومات"],
    phone: "01065234666",
    website: "https://www.facebook.com/share/1Mp1nQLRBk",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/308622580_460952546070742_1852859030443080013_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DMZHs0eUWikQ7kNvwGucyVX&_nc_oc=AdkV6mk-s2SvlLhey81E9-UvTdVjmQO_sEJLZTxFLnAWH6KKouCfDb-iwQm2ZOa1E2s&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=LZpfE45YBbAZUmi9UrPM3Q&oh=00_AfF3WVAuYjgX4j833AmdBBVc7-fCv7oFcXmsgm2Ga8cRww&oe=680C8495",
    map_link: "",
    description:
      "ـالمتفوقين في العلوم والتكنولوجيا «ستيم» هي مجموعة مدارس ثانوية حكومية في جمهورية مصر العربية، تتبع وزارة التربية والتعليم والتعليم الفني، أنشأت بقرار وزير التربية والتعليم رقم 369 لسنة 2011، بدعم ومنحة من الوكالة الأمريكية للتنمية الدولية بقيمة 124 مليون دولار أمريكي، وتنتهج نظام تعليم STEM وهو نظام تعليمي يستخدم لتجميع تخصصات العلوم، التكنولوجيا، الهندسة، والرياضيات وتدريسها معًا، ويهدف إلى تحسين القدرة التنافسية للطلاب في تطوير العلوم والتكنولوجيا والرياضيات، وكذلك الاهتمام وتطوير قدرات المتفوقين في هذه التخصصات العلمية.",
  },
  {
    id: 41,
    name: "أكاديمية السويدي الفنية بمرسي علم",
    address:
      "شارع ناصر الخرافي، وسط البلد، مرسي علم، داخل مدرسة مرسي علم الابتدائية المشتركة",
    governorate: "البحر الأحمر",
    specialization: [" الطاقة المتجددة والاتصالات والمعلومات"],
    phone: "",
    website: " https://www.facebook.com/share/1NgYhNX58w/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/348223624_1336632420599384_2246278138359471883_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=OunaQ08RVJgQ7kNvwGoO3zw&_nc_oc=AdlqJFGhyhD1fVxCBTYAyowj_0IdLXXIM-93w8Y8Njw9NeMwajYSb_KCP6lAdaur1sk&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=k0m-ccUgxFKuVZUpcz6axQ&oh=00_AfHZkO8jAuOKrYw5_oQbEYv4PIKUa14O2iJotgsb22OITg&oe=680C98DB",
    map_link: "",
    description: `أكاديمية السويدي الفنية هي مؤسسة تعليمية متخصصة في تقديم برامج التعليم الفني والتدريب المهني وفقًا لأحدث المعايير الدولية. تسعى الأكاديمية إلى تزويد الطلاب بالمهارات والكفاءات اللازمة لتلبية احتياجات سوق العمل المحلي والدولي، مع تركيز خاص على التدريب العملي داخل المصانع المتخصصة.
تمتلك الأكاديمية عدة فروع في مختلف أنحاء مصر، وهي:

1. فرع العاشر من رمضان: يقع في قطعة رقم 1 - بيراميدز لتنمية المناطق الصناعية (بي آي باركس)، بجوار مصنع إسكرا إميكو، مدينة العاشر من رمضان، محافظة الشرقية.
2. فرع السادات: يقع في مدينة السادات، بمحافظة المنوفية.
3. فرع مرسى علم: يقدم برامج تعليم فني وتدريب مهني متخصصة في مجالات متنوعة تتماشى مع احتياجات سوق العمل في منطقة البحر الأحمر.
4. فرع بورسعيد: يهدف إلى تقديم تعليم فني متميز في التخصصات الصناعية والمهنية، ليساهم في رفد السوق المحلي بكفاءات مدربة.
5. فرع بني سويف: يُركز على تقديم برامج أكاديمية متخصصة، مع تطوير المهارات العملية للطلاب في مجالات الصناعة المختلفة.
6. فرع أسيوط: يقدم برامج تعليمية وتدريبية متخصصة في المجال الفني، لدعم تنمية الكفاءات في صعيد مصر.
7. فرع قنا: يوفر برامج متعددة في التخصصات الفنية والصناعية، مع فرص تدريب في الشركات والمصانع المحلية.
8. فرع الإسكندرية: يُعد من أبرز الفروع، ويقدم برامج تدريبية في المجالات الصناعية والهندسية، لدعم احتياجات سوق العمل في المنطقة.`,
  },
  {
    id: 42,
    name: "مدرسة تعليم فني في محافظة البحر الأحمر",
    address: "شارع الحرية، مدينة رأس غارب، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["الكترونيات، بترول، فني بترول، تبريد وتكييف الهواء  "],
    phone: "01065234666",
    website: " https://www.facebook.com/share/16GRzziE35/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/470469886_578945821412670_5382576245604388458_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bhkdaX0ArZEQ7kNvwGdKtlQ&_nc_oc=AdnkYKFqIPZJJVIaP7-ZSlgMx658-mUg3kSWHF4v4s0ttj1hLOfLXXxSf_EMf5JKABI&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=Y6GUNm4INvxEu9lsEkeHxw&oh=00_AfGrVBM4luF7exQ_fpIO6o35GsYR7jinJjhTDg-3KtGjUA&oe=680C8600",
    map_link: "",
    description:
      "المدرسة بنظام الدبلوم الفني 5 سنوات، تمنح الطالب شهادة مؤهل فوق المتوسط موضحة أنها تمنح خريجيها الالتحاق بكلية الهندسة للبترول وذلك بناء علي النسبة التي يحددها التنسيق الجامعيتعتبر من المدارس المؤهلة لسوق العمل مباشرة، نظرا لوجود العديد من شركات البترول في المنطقة ",
  },
  {
    id: 43,
    name: "مدرسة صالح عوض الله الفنية المتقدمة",
    address: "شارع محطة المياه مدينة رأس غارب، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["الكترونيات، بترول، فني بترول، تبريد وتكييف الهواء "],
    phone: "01065234666",
    website:
      "https://www.facebook.com/groups/1701596106517478/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/449256606_1625989701486340_384061918880079571_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_ohc=-f788ZDRLxUQ7kNvwETrIZu&_nc_oc=AdmQm6ImTuXgN9tPOIBU0eOQFEgz7QXUDSK0Yzr4VRFY0RNJQiN_6BWcU-TLBHarF4M&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=T46mYICJ6_E5tHOBBfZY1Q&oh=00_AfFmtEyIGrTARo3cMWRxVE_NbtSiky1IR5al55ZYvhGn7Q&oe=680C6E0B",
    map_link: "",
    description:
      "المدرسة بنظام الدبلوم الفني 5 سنوات، تمنح الطالب شهادة مؤهل فوق المتوسط موضحة أنها تمنح خريجيها الالتحاق بكلية الهندسة للبترول وذلك بناء علي النسبة التي يحددها التنسيق الجامعيتعتبر من المدارس المؤهلة لسوق العمل مباشرة، نظرا لوجود العديد من شركات البترول في المنطقة ",
  },
  {
    id: 44,
    name: "مدرسة إيفر جرو الدولية للتكنولوجيا التطبيقية",
    address: "المنطقة 13، مدينة السادات، محافظة المنوفية",
    governorate: "المنوفية",
    specialization: ["تشغيل وصيانة معدات الصناعات الثقيلة المتطورة."],
    phone: "01065234666",
    website:
      "https://www.facebook.com/p/مدرسة-ايفرجرو-الدولية-للتكنولوجيا-التطبيقية-100094688225797/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/363412117_117193151446959_7171522961273757273_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KOLw-YNQe9wQ7kNvwEBC1t9&_nc_oc=AdkEYfeHs5ujgaf7Yf06LgsLyfcVgNJXkqFmIucYmn5CyiKNkvp1WhWdcPSN0Qfmxgw&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=aDreLcMzn3Jd81V8cZu9qA&oh=00_AfHfBMGgILM4av3zo2bSKESKYQIope-PynFxdKnI2wnKCQ&oe=680D5160",
    map_link: "",
    description:
      "المدرسة بنظام الدبلوم الفني 5 سنوات، تمنح الطالب شهادة مؤهل فوق المتوسط موضحة أنها تمنح خريجيها الالتحاق بكلية الهندسة للبترول وذلك بناء علي النسبة التي يحددها التنسيق الجامعيتعتبر من المدارس المؤهلة لسوق العمل مباشرة، نظرا لوجود العديد من شركات البترول في المنطقة ",
  },

  {
    id: 45,
    name: "مدرسة سمير سلامة الصناعية",
    address: "شارع المدارس بجوار محطة المياه، رأس غارب، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: [
      "ملابس جاهزة، زخرفة، تنسيق وإعلان، تركيبات ومعدات كهربية ",
    ],
    phone: "01015169809",
    website:
      "https://www.facebook.com/groups/SAMIRSALAMA.SCHOOL/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/464373019_8705277226195773_4872119408477665465_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_ohc=Vw7i0NqSq3oQ7kNvwFILqs4&_nc_oc=AdliamVALjrJc6jmIjD-h1L5EjPu5o-DeDBEFGm-ePTpKUFLOGbrqlZv4jNHX1ekpuQ&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=aaGFAeAOB-Ptbe1BooCoCw&oh=00_AfHZB-IZXYLgeAM3FsEn6AQObuXejldCDeTUcHLEzKrqFw&oe=680CA154",
    map_link: "",
    description: "",
  },
  {
    id: 46,
    name: "مدرسة جملات حراجي التجارية",
    address:
      "شارع الميناء بجوار مسجد علي بن ابي طالب، رأس غارب، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["إدارة وتسويق وسوق المال"],
    phone: "01015169809",
    website: "https://www.facebook.com/share/1ALh3gWCBw/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/277749752_376674074465947_1020440451211483671_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Lt2viKrUY4EQ7kNvwGyzD7c&_nc_oc=Adlv8Gu8pNImLiVIRHNDr6brATkMz78b3izc0Mh7W-t95Fl62KqrCRiMgagedoK1i_o&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=F_NExxKspalnpKmfuQLHlg&oh=00_AfE2wWF9XCi3ZEdBAhX4WMHfjeSHHJRmKbgrA9ZBjh7L7Q&oe=680C6E0C",
    map_link: "",
    description: "",
  },
  {
    id: 47,
    name: "مدرسة الغردقة الصناعية بنات نظام 3 سنوات",
    address: "حي السلام، الغردقة، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: [
      "فني تركيبات طاقة شمسية، تركيبات ومعدات كهربية، زخرفة، تنسيق وإعلان، ملابس جاهزة وتريكو، مهني",
    ],
    phone: "01015169809",
    website:
      "https://www.facebook.com/groups/1711191455809329/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/461838352_3767303933518005_1668873896379227811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=7pF9EE1fqbgQ7kNvwF4-frQ&_nc_oc=Adlj0pRrNvtv-BSwbN3XKU2MLa3cNVNIMyzhOQv3cKDxO-ZNiqEhErLMQza2EbP9jhw&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=UwX3kLyJ2M9K0p_cFxiHWw&oh=00_AfHPH2LjfCis8rBi4OK3pV_NZ0qh4gyXNaqc7rYfoVjGuw&oe=680C8D9F",
    map_link: "",
    description: "",
  },
  {
    id: 48,
    name: "مدرسة التجارة المتقدمة بالغردقة نظام 5 سنوات",
    address: "اول شارع المدارس، السقالة الغردقة، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["سوق المال، إدارة التسويق، التأمينات التجارية"],
    phone: "01015169809",
    website: "https://www.facebook.com/share/1DPuCT1vHS/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/304942527_450376757109845_3713641782135557698_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=lGpNWDVA56sQ7kNvwGReY95&_nc_oc=Adm_iRl6-QOcCl3ZSvuacpOL4zK5i9f3ZRYJXUOGE4NA_-EhbJO4X-PTzpYSQ7eHGK0&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=ACzKTCk5yozMN4MWFTp9lw&oh=00_AfHMd9JIgS4U_-yP6Th-DpUYnnMCQjbweuExv__wph68xQ&oe=680C7EE5",
    map_link: "",
    description: "",
  },
  {
    id: 49,
    name: "مدرسة جمال نظيم الفندقية بالغردقة",
    address: " شارع شيراتون السقالة الغردقة، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["قسم فني طاهي، قسم فني مضيف، قسم فني مشرف غرف "],
    phone: "01015169809",
    website: "https://www.facebook.com/share/1E2LwdA9MN/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/303419647_545562550699821_8461348376173020735_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SZB1iXSYlHMQ7kNvwG0esiW&_nc_oc=Adkdlmm-m7uHosK-v59yWVXvbsQSIuGfN2KvTWI6OHNtcjH0Yq0_qdWzzVFfOz06HNw&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=2hnX0zvtdg9rBZo5AnavEA&oh=00_AfGeKsx4lSQDaiYfvpzk-6O2Ouc0HMGSnno9QoyUpekRLg&oe=680C9099",
    map_link: "",
    description:
      "تعتبر فرصة للباحثين عن عمل في مجال السياحة، خاصة مع وجود العديد من الفنادق والمنتجعات السياحية في الغردقة ",
  },
  {
    id: 50,
    name: "مدرسة سفاجا الصناعية بنات نظام 3 سنوات ",
    address: " مدينة سفاجا، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: ["الكهرباء، الزخرفة، الملابس الجاهزة "],
    phone: "01015169809",
    website:
      "https://www.facebook.com/groups/1429928227059956/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/456176354_1819473125246499_5362391057193434175_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2285d6&_nc_ohc=Any-u4VOcpQQ7kNvwE0VcoY&_nc_oc=AdlAA_hDEA9OF_SPKlX6ztF_EuSHVxosCJc4OHds5QPyKJHGmV42M2KjcwRvuJVdR6A&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=LejA5-temkW7YEXu4lL1Sg&oh=00_AfEaLZ6wpIkc6ya1HPpmLx45JFVKvzB0UiLzwoeirpq89g&oe=680C7D03",
    map_link: "",
    description:
      "تعتبر فرصة للباحثين عن عمل في مجال السياحة، خاصة مع وجود العديد من الفنادق والمنتجعات السياحية في الغردقة ",
  },
  {
    id: 51,
    name: "مدرسة سفاجا للصناعات البحرية العسكرية بنين نظام 3 سنوات",
    address: "مجلس المدينة، شارع الجمهورية، مدينة سفاجا، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: [
      "لوجستيات وملاحة، فنون بحرية، تركيبات ومعدات كهربية، تشكيل ولحام  معادن، تشغيل معادن، تحلية مياه (مزدوج)، كهرباء (مهني) ",
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/289397534601602/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t1.6435-9/44933416_732868540405406_5271140451015983104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2285d6&_nc_ohc=rYhH34sV3m4Q7kNvwHYTf7i&_nc_oc=Adlv2nI4bRUsFFIdjHgIJZThUY-SFqHR4NwTSbd8gmv9Cpxqa4cPv2_oRH8XQLSXQ2w&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=HZAswXJ-KLnR8hzy3L5Bbw&oh=00_AfGEWffA4UxsVhHDRS-hrAO_b6RIuQ1CSy5O1gnBFNxQEg&oe=682EEAA7",
    map_link: "",
    description:
      "تعتبر المدرسة من الخيارات المميزة لطلاب الشهادة الإعدادية، حيث تؤهل الطلاب للعمل كظباط بحريين بعد التخرج",
  },
  {
    id: 52,
    name: "مدرسة سفاجا التجارية المشتركة نظام 3 سنوات ",
    address: " مدينة سفاجا، محافظة البحر الأحمر",
    governorate: "البحر الأحمر",
    specialization: [
      "لوجستيات وملاحة، فنون بحرية، تركيبات ومعدات كهربية، تشكيل ولحام  معادن، تشغيل معادن، تحلية مياه (مزدوج)، كهرباء (مهني) ",
    ],
    phone: "",
    website: "https://www.facebook.com/share/1ANfr3fe9F",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/301141581_446729060803619_3803709224950283212_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=sn2Sg0qikn0Q7kNvwH0Us7h&_nc_oc=Adn8sVRxwm6-jCM5loAD316zGhgFVusZnZLDrnTIOHLG57_sn-HTioNDQs127uzGL7A&_nc_zt=24&_nc_ht=scontent.fcai20-6.fna&_nc_gid=C4DcvB04-Uhjihl25bS3-Q&oh=00_AfHO6-noqujADd9lUV5JsZ7LHHSO6G0WnHOfsxHnppJMTA&oe=680D3D57",
    map_link: "",
    description: "",
  },
  {
    id: 53,
    name: "مدرسة أحمد شوقي الصناعية المشتركة صناعي نظام 3 سنوات ",
    address: " بشلاتين جنوب البحر الأحمر ",
    governorate: "البحر الأحمر",
    specialization: [
      "سيارات، تركيبات ومعدات كهربية، نجارة اثاث، تحلية مياه مزدوج ",
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/502057520526711/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t1.6435-9/69509480_116209616445899_4487819509503098880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2285d6&_nc_ohc=WSJQOPcXMGUQ7kNvwECAx8t&_nc_oc=AdktCy9qKNNKShd2_NgeVC6tE18E1jEo3wlHRGEQZQC74SmM4uD5WT9OvVZK7KnAQZM&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=BIoUb4uvUO4K2rygunm8gA&oh=00_AfGSz0YbXvFEH6a-trVHvy8ASsDfn5JnOUygn-O2BYPKGQ&oe=682ED3B3",
    map_link: "",
    description: "",
  },
  {
    id: 54,
    name: "مدرسة القصير الصناعية بنات نظام 3 سنوات",
    address: " شارع مدرسة فاطمة الزهراء، القصير،   جنوب البحر الأحمر ",
    governorate: "البحر الأحمر",
    specialization: [
      "ملابس جاهزة، زخرفة وتنسيق وإعلان، تركيبات ومعدات كهربية، ملابس جاهزة( مهني) ",
    ],
    phone: "",
    website: "https://www.facebook.com/share/16Mo7NFv36/",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/312525160_527604589376454_385701252757103221_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Ba4w99bTLHwQ7kNvwGgTZ1A&_nc_oc=Adk3CTQqp6V2cypXO1jef5ddCFMsNWpvhB_6_C9yFfHuO1NQ9vRG2XGVYdVT6vMbfec&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=36z_-0_fDNx0F0_GpErH8w&oh=00_AfHVyOh9TNGeU7K3nki_nD2LnIi5MXqwktmSIm85HCn38g&oe=680D2B5B",
    map_link: "",
    description: "",
  },
  {
    id: 55,
    name: "مدرسة القصير الصناعية العسكرية بنين",
    address: "القصير، جنوب البحر الأحمر ",
    governorate: "البحر الأحمر",
    specialization: [
      "السيارات، تركيبات ومعدات كهربية، زخرفة وتنسيق وإعلان، تشغيل معادن، زخرفة وتنسيق وإعلان (مهني)، كهرباء ",
    ],
    phone: "",
    website: "https://www.facebook.com/share/1BjU4ay4M7/",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/292952818_408209167999734_6766136804566819108_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=WXMNDUiz30MQ7kNvwGhU-SV&_nc_oc=AdmF4ydmUoozqIkWiSOjDrRT8cOAci75RLf8MBhUahyYYwrRX8_VgzCo_P50_Lbwurg&_nc_zt=24&_nc_ht=scontent.fcai20-6.fna&_nc_gid=DtfjCjVNorn-z9I6zXiD_g&oh=00_AfFmxba3eZsT1LxAykHMDc7xegz4N92Ajk_FHhkGnNdCLw&oe=680D4DF5",
    map_link: "",
    description: "",
  },
  {
    id: 56,
    name: "مدرسة القصير الفندقية نظام 5 سنوات",
    address: "القصير، جنوب البحر الأحمر ",
    governorate: "البحر الأحمر",
    specialization: ["انتاج أغذية وومشروبات"],
    phone: "",
    website: "https://www.facebook.com/alqsyr.alfndqyh/",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/464567921_10228542065470598_6669578475859137924_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9eae26&_nc_ohc=JWN0nNVkYBMQ7kNvwExSPLJ&_nc_oc=AdkE5852bwQ6_QXXaRyLe4oIdiSbPVCEP7-CMfB4VgUi3mxZLGJ1XdXq9t-Z74ZgGgw&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=hlCOADvxQVn6x8ErV9_XIQ&oh=00_AfFHP2bOZRO7D7TBAnxzTOBhJne6QF4LXxH0398duNJcGA&oe=680D4695",
    map_link: "",
    description: "",
  },
  {
    id: 57,
    name: "مدرسة الإنتاج الحربي للتكنولوجيا التطبيقية بحلوان",
    address: "شارع 10، بجوار مصنع 45 الحربي، حلوان، محافظة القاهرة",
    governorate: "القاهرة",
    specialization: [
      `
      التبريد والتكييف
• الحاسبات وتكنولوجيا المعلومات
• الأثاث الخشبي
• سباكة المعادن والمعالجات الحرارية
• تشكيل ولحام المعادن
• الصيانة الميكانيكية والهيدروليك
• التركيبات الكهربائية
• معدات كهربائية
• إلكترونيات
• تشغيل المعادن
• صيانة وإصلاح السيارات
• البتروكيماويات والكيمياء الصناعية`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/p/1M8tZnFSYk/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/412830242_762614819239819_8841387147042105529_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=IwCfIQI5Aw0Q7kNvwEpyVjd&_nc_oc=AdlRsiOW5qR2EjBCIl2wOh7jFb17Qlpm_0zWvk9W6Koh8IXNk3f_WH2z0cPZPiwm-DM&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=Eo3h05uBgmr0ZUuttZBlXA&oh=00_AfGF06OPb7gvcmg6xN-IQ9pusMoW7cghcfYdHAtvZRGIlw&oe=680D2BDD",
    map_link: "",
    description: "",
  },
  {
    id: 58,
    name: "مدرسة الإمام محمد متولي الشعراوي للتكنولوجيا التطبيقية",
    address: "التجمع الثالث بجوار قسم ثالث القاهرة الجديدة ، محافظة القاهرة",
    governorate: "القاهرة",
    specialization: [
      "التشطيبات والصيانة المعمارية تبريد وتكييف الهواء شبكات متخصصة للمنشآت نظم الكهرباء المتكاملة",
    ],
    phone: "01060329909",
    website: "https://www.facebook.com/share/123AeRDDBHG/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/353625476_100635649737377_364145244683941197_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ZOFgahdik50Q7kNvwGy1_Lj&_nc_oc=AdmVjo5Jm650KbPkSRCjiqNGLkLdgWdQQR_yCjouqiM5cMHenpMPuJFWdv3gxWD_wns&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=oFtZgYo2rxRZjV0eoaki8A&oh=00_AfGbKT_uPMc1hHmyF4FDSZISWqBRaLPIqnZctqnRoK_LDg&oe=680D334A",
    map_link: "",
    description: "",
  },
  {
    id: 59,
    name: "مدرسة التكنولوجيا التطبيقية للميكاترونيات",
    address: "طريق الخلفاء الراشدين مدينة بدر",
    governorate: "القاهرة",
    specialization: [
      "ميكاترونيات (تجمع بين الهندسة الميكانيكية، الكهربائية، الحاسوب، والإلكترونيات).",
    ],
    phone: "01060329909",
    website: "https://www.facebook.com/share/153PHZz83e/",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/480728553_662255169492968_8206173365577346694_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=hBbjymJeOv4Q7kNvwHMWDCE&_nc_oc=AdnYvQ6czWlR5RkL28VF8-Uy3nBQc4ZgUll7_tdGR9Yu9MMsEc6uhdXSHYrG6gWU70s&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=MwzAPYdElRWBFgooN-YWRA&oh=00_AfFerJVnIBSroCj7rK67KmetszwKCz6JK8HiXVS937q34g&oe=680D27F2",
    map_link: "",
    description:
      "ملاحظة: تقبل الطلاب من بدر ، الشروق ، العاشر من رمضان ، العبور ، بلبيس ، السلام",
  },
  {
    id: 60,
    name: "مدرسة الإنتاج الحربي للتكنولوجيا التطبيقية بالسلام",
    address: "",
    governorate: "القاهرة",
    specialization: [
      `
      تكنولوجيا الكهرباء
• تكنولوجيا الإلكترونيات
`,
    ],
    phone: "",
    website: "https://www.facebook.com/MOMPEGYPT",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/419862707_772969254860143_8759952744929837853_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vps7bCGMcIoQ7kNvwFXfTlY&_nc_oc=AdnV8dX1DXWeFxutKyT80W26MLrxdbe8cxpRJeHLIezxE4Ww7pYgN3tc7eT3IolKfJs&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=4nni1VeIB2tAy64HydrdtQ&oh=00_AfFwnpQPrLrfE7KQ_1uMJcS8y4vSUC5rb-xeWutrcIbofA&oe=680D46B9",
    map_link: "",
    description: "",
  },
  {
    id: 61,
    name: "مدرسة الشهيد النقيب أحمد حامد تعلب الفندقية للتكنولوجيا التطبيقية",
    address: "",
    governorate: "القاهرة",
    specialization: [
      `
  إدارة وتشغيل المطاعم

`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1DdvMx7Yr6/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/299316529_531754035413374_368162595503049740_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xpKwOYQG8qgQ7kNvwHegAmC&_nc_oc=Adn5Rlnnjh3EB1oXUupm332jU1BYa9BTeptznEYY32Sc8fmXNMLpvmiLDCA_-_rnFFo&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=-wF1J93F7O0GMemYLUb_QQ&oh=00_AfFEJjSvNawQt33crbr8Zu3wZLg8bQro--Vnu9NspjWbeA&oe=680D3923",
    map_link: "",
    description: "",
  },
  {
    id: 62,
    name: `مدرسة "أي- تك" للتكنولوجيا التطبيقية`,
    address: "",
    governorate: "القاهرة",
    specialization: [
      `
• تكنولوجيا المعلومات
`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/p/152FFx5W5p/",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t1.6435-9/199788812_323819779370103_8086830519529520648_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hDVe6qkLPrkQ7kNvwHFBg-0&_nc_oc=AdmZbfA4EDMAL38KwaHHRtLBPV4LYcNyaPckesgMPKxAuypyMniw2_rQgSNZ2AltKJI&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=saViURThQSBA4m6OfGN9cA&oh=00_AfFRLjTfaJkzgn6-YtN-DKo4SQrlrd9RYMCiIsB-WMjrzw&oe=682EF4EB",
    map_link: "",
    description: "",
  },
  {
    id: 63,
    name: `مدرسة "إلكترو مصر" للتكنولوجيا التطبيقية`,
    address: "",
    governorate: "القاهرة",
    specialization: [
      `
• الصيانة الكهربائية`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/18nUu5Wi26/",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/244429258_102550358874002_6331299706649018212_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vO-epL6vuRQQ7kNvwHzS60b&_nc_oc=AdlfyU7xBs5jnQrgJzXcOw5Ni8V3Fw_eYRqJsj8cKTJoz6qYCHnJZ1cbs4DZ4E3bjsQ&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=gtB4eoOpt7nCwbCj-uZUxQ&oh=00_AfFeZNuJCypS4Gxpsqrj5DdZs5DdXp2Gwp22Qwuz0rwyWA&oe=680D4ACB",
    map_link: "",
    description: "",
  },
  {
    id: 64,
    name: `مدرسة "بي تك" للتكنولوجيا التطبيقية`,
    address: "حي الأسمرات المقطم",
    governorate: "القاهرة",
    specialization: [
      `
 الإمداد والتوريد والخدمات اللوجستية
• التسويق وأساليب عرض المنتجات
• المبيعات وخدمة العملاء
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1B8oWvg4v7/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/485644078_644643788321111_371746253481506175_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=h-loMV3mOa8Q7kNvwEkbA1N&_nc_oc=AdlPHMgsFao3SL0pQ39-NxPqR2gWFWw9gPMcQa0A78UJlyTaZoba2hR-Uj7WoM4X8R0&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=bsEkB-6eiCbMWK3h5VbbMg&oh=00_AfGAVGmUwIlVqIklgD8iHJllHMo6YeBNc71OxgidLvvlpQ&oe=680D4E50",
    map_link: "",
    description: "",
  },
  {
    id: 65,
    name: `مدرسة "HST" للتكنولوجيا التطبيقية`,
    address: "مصر الجديدة",
    governorate: "القاهرة",
    specialization: [
      `
 تكنولوجيا الفنون الرقمية والألعاب
• تكنولوجيا الذكاء الاصطناعي في المراقبة والإنذار

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/18eFZGbSTe/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/425906077_791269586357312_4188643241447742980_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ueRNVjYqVh4Q7kNvwGpFzJr&_nc_oc=AdktzmESIYow2_ZCeibHdoNkffdX6rGHMtcAXGgc7E1Ro_oz7ba710SnosgbN3lwczA&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=4cahzfTYlvHabVbXvdw9Xg&oh=00_AfHV5njuTsrmeANBOi6EPGh4KLMvWPUKF3VY1ZX0RzcxZA&oe=680D5654",
    map_link: "",
    description: "",
  },
  {
    id: 66,
    name: `مدرسة مجموعة فولكس فاجن للتكنولوجيا التطبيقية`,
    address: " حي الأسمرات، المقطم.",
    governorate: "القاهرة",
    specialization: [
      `
• صيانة وإصلاح السيارات

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/v/16QGsrqhtq/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH7ST_8O-eX2X3NanqqLWte_yAuuEPRIHaQ&s",
    map_link: "",
    description: "",
  },
  {
    id: 67,
    name: `مدرسة العريش الثانوية الفنية المتقدمة الصناعية`,
    address: "مدينة العريش - شارع اسيوط - بجوار حى الزهور",
    governorate: "سيناء",
    specialization: [
      `• ⁠العماره 
• ⁠الزخرفه بأنواعها 


   `,
    ],
    phone: " 01227680176",
    website: "https://www.facebook.com/share/1GtpVBnUKj/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/298934759_758950508745545_6184718371280354485_n.jpg?stp=c90.0.540.540a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=XnXL1dURirEQ7kNvwFdnEU-&_nc_oc=Adn_psThTUXHt6jMQ0w1nAn4L92OtFItkHf5WbEQ9Fyynz3vSSjnOE06lYpQD4VuC_s&_nc_zt=24&_nc_ht=scontent.fcai20-6.fna&_nc_gid=3oetuVBcF42rqulmLDJWEQ&oh=00_AfHsNIHAN7d3sl_MsVMKI_wxM5DaB8uRFaHUB04yydtpMQ&oe=680D3CE3",
    map_link: "",
    description: "",
  },
  {
    id: 68,
    name: `مدرسة المتفوقين للعلوم والتكنولوجيا (STEM)`,
    address: "مدينة العريش ",
    governorate: "سيناء",
    specialization: [
      `• برمجة
• تصميم هندسي
• روبوتات
• إلكترونيات `,
    ],
    phone: " 01157233211",
    website: "",
    image_url:
      "https://media.gemini.media/img/large/2018/2/14/2018_2_14_16_15_21_98.jpg",
    map_link: "",
    description: "",
  },
  {
    id: 69,
    name: `مدرسة العربي للتكنولوجيا التطبيقية`,
    address:
      "كفر الرمل، المنطقة الصناعية، قويسنا، بجوار مصنع الحربي، محافظة المنوفية",
    governorate: "المنوفية",
    specialization: [`الكهرباء، الميكانيكا، التبريد والتكييف، واللوجستيات`],
    phone: " 01113359784",
    website:
      "https://www.facebook.com/p/مدرسة-العربى-للتكنولوجيا-التطبيقية-100066898350881/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/274585322_353701160099048_9080788692908631694_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Np94wPN4GqYQ7kNvwGc8R0Q&_nc_oc=AdkfvxgP9GbduVZJUXlPb6kn1Gt83nocbcjuD5seYNJQwPdD46YjElypezE8wrS2isg&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=c49rIxx7BXSAwoVY8Rzyhg&oh=00_AfEpD2hj8tx-jU4M0vLmrgsvStZfHDs1IYArNEtZrTHAgQ&oe=680D5505",
    map_link: "",
    description: "",
  },
  {
    id: 70,
    name: `مدرسة السادات الثانوية الفنية التجارية`,
    address: "في رأس سدر، جنوب سيناء",
    governorate: "سيناء",
    specialization: ["التعليم الفني التجاري."],
    phone: " ",
    website:
      "https://yellowpages.com.eg/ar/profile/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D9%81%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9/369216",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/304738180_448251817325154_8216244755524842018_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fH2yq_9ojhkQ7kNvwEZhOs0&_nc_oc=AdkdiujC84j1BOElKB7x60qj7u4ktLLu0JDSM32QYn-yGfsSNuSSpGtnPSMS_iQIPC0&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=VLRzdJG6943QaO1Zq3e2jQ&oh=00_AfGV0-vrSMljDpULIxAyzYus6OgGpPEElF3Q6topjmNp_w&oe=680D6467",
    map_link: "",
    description: "",
  },
  {
    id: 71,
    name: `مدرسة نويبع الثانوية الفنية`,
    address: "تقع في مدينة نويبع بمحافظة جنوب سيناء.",
    governorate: "سيناء",
    specialization: [
      "تشمل التعليم الفني الصناعي والتجاري، مع التركيز على المهارات العملية.",
    ],
    phone: " 01113359784",
    website:
      "https://www.facebook.com/pages/%D9%85%D8%AF%D8%B1%D8%B3%D9%87%20%D9%86%D9%88%D9%8A%D8%A8%D8%B9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D9%87%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%D9%87/257903981361891/#",
    image_url:
      "https://media.elwatannews.com/media/img/mediaarc/large/13833820541638599581.jpg",
    map_link: "",
    description: "",
  },
  {
    id: 72,
    name: `مدرسة طور سيناء الثانوية الفنية التجارية`,
    address: "تقع في مدينة الطور بمحافظة جنوب سيناء.",
    governorate: "سيناء",
    specialization: [
      "تشمل التعليم الفني التجاري، مع التركيز على المهارات العملية.",
    ],
    phone: " 01113359784",
    website:
      "https://yellowpages.com.eg/ar/profile/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%B7%D9%88%D8%B1-%D8%B3%D9%8A%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D9%81%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9/369345",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4L4w6xogbgJaNI3sFksD7kJX_lmW22yPuA&s",
    map_link: "",
    description: "",
  },
  {
    id: 73,
    name: `مدرسة إدفينا الثانوية الصناعية المتقدمة`,
    address: "إدفينا - مركز رشيد - محافظة البحيرة",
    governorate: "البحيرة",
    specialization: [
      `الكهرباء
الميكانيكا
الإلكترونيات
الحاسبات وتكنولوجيا المعلومات
(التخصصات قد تختلف حسب كل سنة دراسية)
`,
    ],
    phone: " 01113359784",
    website: "https://www.facebook.com/share/18UjcuVhmz/",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/277565786_351518613661271_4982156470782858387_n.png?stp=dst-png_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=1DEct6GKt4AQ7kNvwEeOugO&_nc_oc=AdljZqA9dGT5CrQLTdUcLaaDZkvow2UUOqmzSYP91dj7CiCBk9dLVcRcCqdlLzpLPnc&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=8SiN1x2Oe8tE9k2zUR53ww&oh=00_AfHLsykVh4DCDm3pSC1LNL87S3mtF90AZzXzaHsjL3FRiw&oe=680D51E6",
    map_link: "",
    description: `
    نظام 5 سنوات بعد الإعدادية
تابعة لوزارة الإنتاج الحربي
دراسة نظرية وعملية في تخصصات صناعية حديثة
تدريب عملي داخل مصانع الإنتاج الحربي
شهادة معتمدة من وزارة التربية والتعليم
`,
  },
  {
    id: 74,
    name: `المدرسة الثانوية الصناعية نظام مبارك كول `,
    address: " شارع عبد السلام عارف دمنهور",
    governorate: "البحيرة",
    specialization: [
      `
كهرباء
ميكانيكا
تكنولوجيا معلومات
تبريد وتكييف
ملابس جاهزة للبنات

`,
    ],
    phone: " 01113359784",
    website: "https://www.facebook.com/share/18UjcuVhmz/",
    image_url:
      "https://media.elwatannews.com/media/img/mediaarc/large/9240622571626000424.jpg",
    map_link: "",
    description: `فرص كبيرة للعمل بعد التخرج داخل الشركات المتدربين فيها`,
  },
  {
    id: 75,
    name: `مدرسة WE للتكنولوجيا التطبيقية`,
    address: " شارع شارع جلال قريطم، دوران الاستاد، دمنهور",
    governorate: "البحيرة",
    specialization: [
      `تكنولوجيا المعلومات والاتصالات.
`,
    ],
    phone: " 01113359784",
    website: "https://www.facebook.com/share/1DpVp9iF7H",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/254703982_109572444871158_1735240021513276497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zFXBxqe7EIUQ7kNvwGa55vF&_nc_oc=AdmELUZWOP86uSVPxP9r0j1MExIOenYCSQMRfd-F-gG2qn_Y3zwLZdHDqqvx6eIiecM&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=gIMt-ff_YClCqzA7FCLzow&oh=00_AfEiKsInVX-OAV8MtzUPa-Q3ugYFIX3HIB9BV6GK1Jdn2w&oe=680D5709",
    map_link: "",
    description: `مزيج من التعليم الأكاديمي والتدريب العملي المكثف في معامل مجهزة وشركات متخصصة.
يحصل الطلاب على شهادة معتمدة دوليًا في مجال الاتصالات وتكنولوجيا 
مميزات المدرسة:
تدريب عملي في معامل مجهزة وشركات متخصصة.
فرص تدريبية ميدانية مع الشركة المصرية للاتصالات.
مناهج معتمدة دوليًا في مجال الاتصالات وتكنولوجيا المعلومات.
تأهيل الطلاب لسوق العمل المحلي والدولي.
توفير فرص عمل للخريجين في شركات الاتصالات وتكنولوجيا 
`,
  },
  {
    id: 76,
    name: `مدرسه عمار للتكنولوجيا التطبيقية`,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [
      `تكنولوجيا المعلومات والاتصالات.
`,
    ],
    phone: "0127 3555575 ",
    website: "https://www.facebook.com/share/15PvZZkLue/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/449618035_451252574347047_7726093442797536307_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9vraci8PLtIQ7kNvwHqPLdT&_nc_oc=AdnBpg6tWG1tAt2r2SzglOnW_y9vfHjJfzvSNCEH9lrTorbWGCXpPfGrdLC1tL7tapc&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=n-_RE9_I-6cO7LWfnbGHig&oh=00_AfFeLOwPt36IdQvIlgNAdR0tvh0QdwAXda8IDLiJ1G5qGQ&oe=680D7440",
    map_link: "",
    description: ``,
  },
  {
    id: 77,
    name: `مدرسة موبيكا الدولية للتكنولوجيا التطبيقية`,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [
      `تشغيل ماكينات CNC وروبوتات 
     تكنولوجيا المعلومات والذكاء الاصطناعي
`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1633nLaF2v/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-1/375129700_138330789346398_4190800273183136120_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=XJsajc2sGPkQ7kNvwGp1o5x&_nc_oc=AdkIkzHF047hs_xxs9J1vr9TWWsMLtnIZLeEXdADcvnx-QSRduVMO2o5abMtqHcqX2A&_nc_zt=24&_nc_ht=scontent.fcai20-2.fna&_nc_gid=5Je62TigE3b0rbdIzoJgoA&oh=00_AfHAZRYJYEYeCH5mqNiP4Pl1o9WidD3orrkyXQK4SHyDnQ&oe=680D7C73",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x145855e51933ffa5:0x1aa23a55e4f4e357?entry=s&sa=X&ved=2ahUKEwi0mpHUmMaMAxV50QIHHVisJj0Q4kB6BAgDEAA",
    description: ``,
  },
  {
    id: 78,
    name: `مدرسه تكنولوجيا المعلومات`,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [
      `تشغيل ماكينات CNC وروبوتات 
     تكنولوجيا المعلومات والذكاء الاصطناعي
`,
    ],
    phone: "0111 9427663 ",
    website: "https://www.facebook.com/share/1633nLaF2v/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/492010350_520399964472810_1527582028588195876_n.jpg?stp=c125.0.750.750a_cp6_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=714c7a&_nc_ohc=w-lbbbki8REQ7kNvwEZlE5P&_nc_oc=AdmvMbQgXyL84HfGv_1oeoStkBG6_x_48rREQuII_x059blgp8_htfcx8jJ1-R1DtnQ&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=2nYXF8IALHdLqjd7jri4zg&oh=00_AfEcZwzMYKk2ZP9LBFXq7uR8je37aKkAt_WfmdWUbsemdQ&oe=680D6D23",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x14584714193892c5:0xac836a94605db090?entry=s&sa=X&ved=1t:8290&hl=en-eg&ictx=111",
    description: ``,
  },
  {
    id: 79,
    name: `مدرسه غبور 1 للتكنولوجيا التطبيقيه`,
    address: " مدرسة غبور للتكنولوجيا التطبيقية بمنطقة 6 أكتوبر",
    governorate: "الجيزة",
    specialization: [
      `صيانه سيارات - إصلاح هياكل السيارات - دهان السيارات - صيانة سيارات النقل والحافلات
`,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1633nLaF2v/?mibextid=wwXIfr",
    image_url:
      "https://watanimg.elwatannews.com/image_archive/original_lower_quality/2652767571659340299.jpg",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x14583153f0b958b3:0x90fb26a2380c5cb4?entry=s&sa=X&ved=2ahUKEwjW_YnomsaMAxWZ0wIHHZO-CeAQ4kB6BAgDEAA",
    description: ``,
  },
  {
    id: 80,
    name: `اكاديمية الفنون التكنولجيه التطبيقيه
`,
    address: "العمرانيه ",
    governorate: "الجيزة",
    specialization: [
      `تكنولوجيا تركيب وتشغيل أجهزة الإضاءة تكنولوجيا.
- تركيب وتشغيل أجهزة الصوت.
- تكنولوجيا تركيب وتشغيل أجهزة التصوير.
- تكنولوجيا الخدع والمؤثرات الفنية تكنولوجيا ماكياج وتنكر وأقنعة.
- تكنولوجيا تصنيع وتحريك ديكور العروض الفنية.
- تكنولوجيا صناعة وتحريك الدمي والعرائس.
- تكنولوجيا صناعة وتركيب وإصلاح الآلات الموسيقية.
- تكنولوجيا تفصيل ملابس وأزياء وأحذية العروض الفنية.
- تكنولوجيا إدارة خشبة مسرح.
- تكنولوجيا الحرف اليدوية والمنتجات الورقية.
`,
    ],
    phone: " 0101 6365521 ",
    website: "https://www.facebook.com/share/14xb4v331N/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-1/316200796_103718315904883_3436057020600953390_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=hStnH4xh9kQQ7kNvwETi4tW&_nc_oc=AdmAzK4NCgoxzJOROlQPIAMYzUDh9oTOrBVjjBco5f7JAhlhJl-gdawvv0OgeDhb4_Y&_nc_zt=24&_nc_ht=scontent.fcai20-1.fna&_nc_gid=2YZk0L8jGSwHfgmsSavFBQ&oh=00_AfFY70npQbTUCuMAVYJOO8lHlbG9rjYcKWAUQ7SIIrQQQA&oe=680D7CBC",
    map_link: "",
    description: ``,
  },
  {
    id: 81,
    name: `مدرسه ايفا الدولية للتكنولوجيا التطبيقية`,
    address: "٦ اكتوبر",
    governorate: "الجيزة",
    specialization: [
      `تشطيبات معمارية 
تبريد وتكييف الهواء 
كهرباء شبكات صحية
 نجارة عمارة
`,
    ],
    phone: " 0101 6365521 ",
    website: "https://www.facebook.com/share/15eu6Q9VjX/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/362985384_115302978318320_1107367163343894151_n.png?stp=dst-png_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gzxpDrIjSZQQ7kNvwF78QqE&_nc_oc=AdlJwDaoYUbTlGQfXi9DbiDQivVhsaBD4tcbq_RtP9wNNtYXbm-zejQX6MLA88HrHNI&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=XUn-XHOZid2Y4uBnawhVlA&oh=00_AfEPK2dBzBUvWWN7zSdtE4k6Ga759Q1dtPCTmfqxecL6Ag&oe=680D6B5F",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x14585567bdbd1139:0x10815c4d843b6c7e?entry=s&sa=X&ved=2ahUKEwiE4oD2ncaMAxWq7AIHHTdYFq0Q4kB6BAgDEAA",
    description: ``,
  },
  {
    id: 82,
    name: `مدرسه السويدي الدولية للتكنولوجيا التطبيقية والبرمجيات`,
    address: "٦ اكتوبر",
    governorate: "الجيزة",
    specialization: [
      `مكونات الطاقة- كابلات
تصنيع وتركيب وصيانة المسارات الكهربية (باص واى)
تشغيل ماكينات بلاستيك
الكترونيات صناعية (إنجليزى)
البرمجيات والتطبيقات الصناعية
إلكترونيات صناعية - عربى
مكونات طاقة- محولات
تكنولوجيا الصناعات الدوائية
`,
    ],
    phone: "0106 8647219",
    website: "https://www.facebook.com/share/1A5XGzBWDE/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/480293817_610193841785183_6904563883400107241_n.jpg?stp=c114.0.1073.1073a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=QzY3Bor4vnoQ7kNvwFswaUX&_nc_oc=Adlx5nzZW7BkBzUS3IAIacWzGAjanIGE1SnR1jT8Lwu_ngLl1GAROBxnB6IDrcw_nJQ&_nc_zt=24&_nc_ht=scontent.fcai20-3.fna&_nc_gid=y5wT1ROpTy_SoReOBxKHWA&oh=00_AfG2alR8jpg2Ixsw39Ct_EC5qkztmL4X9lUli45M7FjL7g&oe=680D777A",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x145855d052038511:0x7d8fe87a2f888771?entry=s&sa=X&ved=2ahUKEwjwsJTin8aMAxXxzgIHHSzDMcoQ4kB6BAgDEAA",
    description: ``,
  },
  {
    id: 83,
    name: `مدرسة وي للتكنولوجيا التطبيقية فرع الشيخ زايد`,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [``],
    phone: "",
    website: "https://www.facebook.com/share/1A5XGzBWDE/?mibextid=wwXIfr",
    image_url:
      "https://mediaaws.almasryalyoum.com/news/verylarge/2023/05/28/2116173_0.jpg",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x145859006819145d:0xfee43741504b5ce5?entry=s&sa=X&ved=2ahUKEwjLxpXUocaMAxU6hv0HHfn8GyQQ4kB6BAgDEAA",
    description: ``,
  },
  {
    id: 84,
    name: `مدرسة نهضة مصر الثانوية للتكنولوجيا التطبيقية`,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [`السياحة المستدامة`],
    phone: "",
    website: "https://www.facebook.com/share/15axabbfMh/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-1/357498294_104981432685084_3332751090714331762_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=cnvLyzxYs1sQ7kNvwEr-dWF&_nc_oc=AdlvfT9v4WgrqSB6ncJ5lFPBizRIh42WlWVeM87MwSX-T2zBmsJ7acGSh2CEBGvsRTM&_nc_zt=24&_nc_ht=scontent.fcai20-1.fna&_nc_gid=EWFCWFy_uokjWDDsILR2ig&oh=00_AfEgREKrRJw3s3fWAwAd_PrPTlGc0F9RVGX6uV8nHhCq4Q&oe=680D53B5",
    map_link:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x14585127809a73a7:0x6cf3a116dea40866?entry=s&sa=X&ved=",
    description: `أول مدرسة تكنولوجيا تطبيقية متخصصة في مجال السياحة المستدامة
`,
  },
  {
    id: 85,
    name: `مدرسه بي تك للتكنولوجيا التطبيقيه `,
    address: "الشيخ زايد",
    governorate: "الجيزة",
    specialization: [
      `تتخصص المدرسة بمجال تجارة التجزئة وهم قسم التسويق وأساليب عرض المنتجات قسم المبيعات وخدمة العملاء قسم الإمداد والتوريد والخدمات اللوجستية`,
    ],
    phone: "0127 1390900",
    website: "https://www.facebook.com/share/1HNSqtFh8S/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-1/357498294_104981432685084_3332751090714331762_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=cnvLyzxYs1sQ7kNvwEr-dWF&_nc_oc=AdlvfT9v4WgrqSB6ncJ5lFPBizRIh42WlWVeM87MwSX-T2zBmsJ7acGSh2CEBGvsRTM&_nc_zt=24&_nc_ht=scontent.fcai20-1.fna&_nc_gid=EWFCWFy_uokjWDDsILR2ig&oh=00_AfEgREKrRJw3s3fWAwAd_PrPTlGc0F9RVGX6uV8nHhCq4Q&oe=680D53B5",
    map_link:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/470205181_573082188810605_3592592655040321626_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EcdNe82fjY8Q7kNvwHGtlYL&_nc_oc=AdmQe4wCxhUPma0CWETyeddA2PaQSNlRWQtVWmj27QCRLUPnq0esqq-ZJZAWh4Z8TbE&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=CB45pAaxJARdBQkP5lMw-A&oh=00_AfECPAo1ABvsZay7Uu9uuPDRenAPFIphHHdxMNb9nFJgbQ&oe=680D608B",
    description: ``,
  },
  {
    id: 86,
    name: `مدرسه المتفوقين ف العلوم والتكنولوجيا`,
    address: "الفيوم الجديده خلف عمارات الإسكان الاجتماعي الجديد",
    governorate: "الفيوم",
    specialization: [
      `قسم الانظمه الكهربائيه والكهروضوئيه ، انظمه صيانه وإصلاح السيارات ،قسم التصنيع قسم صيانه التبريد وتكييف الهواء`,
    ],
    phone: "01002247995",
    website: "https://www.facebook.com/share/1FWxGyYejw/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/395747829_664944659076229_4829307785596650912_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3VhylEi65CIQ7kNvwGRF1ai&_nc_oc=AdlyEolSpRTaKwxnK2DEULDksOL_68TGv9lxO11D5F3F46-5FxTZw-lW__wTWr1BtyI&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=eAdXPgl2LD9DCr4QJG36Uw&oh=00_AfGByNpG0Vd1b0Y4UlGsGP0jhF9GQYRtNbuGy778dy9PbQ&oe=680D7631",
    map_link: "",
    description: ``,
  },
  {
    id: 87,
    name: `مجمع التعليم التكنولوجي المتكامل ITEC (المدرسه الثانويه المهنيه)`,
    address: "دمو مركز الفيوم مساكن دمو القديمه",
    governorate: "الفيوم",
    specialization: [
      `قسم الانظمه الكهربائيه والكهروضوئيه ، انظمه صيانه وإصلاح السيارات ،قسم التصنيع قسم صيانه التبريد وتكييف الهواء`,
    ],
    phone: "01002247995",
    website: "https://www.facebook.com/share/16X4NesCHk/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/376247308_707585174718505_2838743140436587249_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SvkLrUVjWfYQ7kNvwFRQGt0&_nc_oc=AdnfoMmovYQA5fEXd-0TUwdSDpAg8EEf6fnOyJIcHwH6eVpf6B4VufC_yCgFnaH5vaA&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=hUoWG3JLpIYsnRaTw5nNxQ&oh=00_AfFJKG6v5N2_WNIoQs1qivXnOS9wqrNN6mI4S2s8iJTM_w&oe=680D8CBA",
    map_link:
      "https://sites.google.com/view/itec-fayoum/home?fbclid=IwZXh0bgNhZW0CMTEAAR5tF3XsH0SN82j9caWksoDkxJWjTeraomFSSHl4uYhRVMaBrxfNEsrCCKQ2MA_aem_eWAq-0rtCf_6KbBReepS1w",
    description: ``,
  },
  {
    id: 88,
    name: `مدرسه طيبه الثانويه الفنيه للتعليم والتدريب المزدوج بالفيوم `,
    address: "مركز الفيوم طريق مصنع الغزل والنسيج",
    governorate: "الفيوم",
    specialization: [
      `قسم الانظمه الكهربائيه والكهروضوئيه ، انظمه صيانه وإصلاح السيارات ،قسم التصنيع قسم صيانه التبريد وتكييف الهواء`,
    ],
    phone: "01092688899",
    website: "https://www.facebook.com/share/1EhD8S7Zho/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/294328270_378950041028875_6096656529696506774_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=A8KVYJe0AjEQ7kNvwGERWig&_nc_oc=AdlSmxtXFhBcZfBcvdVdp_0AdX0ynIWE_4-sal1QUD8cJ3qPiWwqZwtPkX1mAOYa3EQ&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=WEUUwcTwO2tGysRRjNY16A&oh=00_AfFFJPgxLWTUxw0bepWBYDj_y_lLsecKZYJrH2WcSzyagw&oe=680D722A",
    map_link: "",
    description: ``,
  },
  {
    id: 89,
    name: `مدرسة WE للتكنولوجيا التطبيقية
`,
    address: "طنطا. شارع الجيش",
    governorate: "الغربية",
    specialization: [
      `تكنولوجيا المعلومات – تكنولوجيا الاتصالات – الإلكترونيات – الكهرباء`,
    ],
    phone: "01501112222",
    website: "https://newtanta.blogspot.com/2024/06/we.html?m=1",
    image_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTkasL-zQ19NAIMt6OW5PZ3N95NwsKCoZPRop6PPHBNip06wIkoCGMW0UgsMLOIKXyd5330QRkJn-dpRDLIf5vOqHqVN1obRBKtqLYGre9V7wHhzhcRE30pmFaiJUglU9ocd2MNMFrKG_vyZRrovKtqNYwHF2BrEzL8d8B_crAKO1BCZb1hHMl9R6Xb5Hu/w640-h360-rw/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9%20We%20%D9%84%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9%20%D8%A8%D8%B7%D9%86%D8%B7%D8%A7_20240626_141900_0000.png",
    map_link: "",
    description: ``,
  },
  {
    id: 90,
    name: `مدرسة صالح كامل للتكنولوجيا التطبيقية لصناعات الملابس

`,
    address: "طنطا مجمع الجلاء التعليمي",
    governorate: "الغربية",
    specialization: [
      `الصناعات النسيجية – الملابس الجاهزة
`,
    ],
    phone: "01007256688",
    website:
      "https://tanta.edu.eg/News_Details.aspx?id=88717&utm_source=chatgpt.com",
    image_url:
      "https://view.tanta.edu.eg/op/img/4af5bed0-e7eb-497c-95fd-9ce3e010961b4.jpg",
    map_link: "",
    description: ``,
  },
  {
    id: 91,
    name: `مدرسة طنطا الفنية النسيجية


`,
    address: "شارع سعيد، طنطا، الغربية.",
    governorate: "الغربية",
    specialization: [
      `الصناعات النسيجية – الملابس الجاهزة
`,
    ],
    phone: "01007256688",
    website: "https://www.facebook.com/share/g/1FdpSKRTYx/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/425318038_3656403408011323_2722138478217587077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_ohc=pRbc-xXe5Y8Q7kNvwGlUQ6b&_nc_oc=AdnYqXT2xQ2cdu9o818iwxSqYpQg1qa8L6WHs8EFqY9oCw5MLjrSgzFiRrbfXusvBmE&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=6IoXztFioYsQnyIrgMcxIw&oh=00_AfHYKhhYsuYaFehDHCivtmJwPP8LEgRwT1om-I7rnPeEvA&oe=680ECD50",
    map_link: "",
    description: ``,
  },
  {
    id: 92,
    name: `
مدرسة الجيزة الكهربائية الثانوية الصناعية بنين
`,
    address: "أول شارع فيصل، بجوار المركز الطبي للخلفاء الراشدين، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `كهرباء
`,
    ],
    phone: "02/35850704",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxPKrlAQw9-ijDJ8d5zfOmEtq9g9bckaPCw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 93,
    name: `
مدرسة طباعة إمبابة الثانوية الصناعية بنين
`,
    address: " شارع العامل الأول، مدينة العمال، إمبابة، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `طباعة
`,
    ],
    phone: " 02/37130640",
    website: "",
    image_url:
      "https://dezone.net/wp-content/uploads/2022/05/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D9%8A%D8%A9-%D9%84%D9%84%D8%A8%D9%86%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9.jpg",
    map_link: "",
    description: ``,
  },
  {
    id: 94,
    name: `
مدرسة الميدان الثانوية الصناعية للبنات`,
    address: "شارع عمر مكرم، ساقية مكي، المنيب، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `صناعي عام
`,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyA9KiCAoJXDJk3Tm9CHNbFSUnUm2dUAe2jA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 95,
    name: `
مدرسة الميدان الثانوية الصناعية للبنات`,
    address: "شارع عمر مكرم، ساقية مكي، المنيب، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `صناعي عام
`,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyA9KiCAoJXDJk3Tm9CHNbFSUnUm2dUAe2jA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 96,
    name: `
مدرسة البدرشين الثانوية الصناعية بنين
    `,
    address: "شارع مساكن السوق، البدرشين، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `صناعي عام
`,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gLT-RO1CnQT4-3ks0Cj8a5nhm6ajdsyR7w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 97,
    name: `
مدرسة البدرشين الثانوية الصناعية بنين
    `,
    address: "شارع مساكن السوق، البدرشين، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `صناعي عام
`,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gLT-RO1CnQT4-3ks0Cj8a5nhm6ajdsyR7w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 98,
    name: `
مدرسة مبارك كول الثانوية الصناعية المشتركة    `,
    address: " الحي السادس، بجوار سنتر وادي الملوك، أكتوبر",
    governorate: "الجيزة",
    specialization: [
      ` ميكانيكا، كهرباء، إلكترونيات

`,
    ],
    phone: "01148668630",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71YA33jv_GrlWDbYdzKCCiNlpP3H5FJ2ZcQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 99,
    name: `
مدرسة مبارك كول الثانوية الميكانيكية المشتركة   `,
    address: "مدرسة مبارك كول الثانوية الميكانيكية المشتركة",
    governorate: "الجيزة",
    specialization: [
      `   صناعي 

`,
    ],
    phone: "02/38310755",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFY1mIJun9sMWmp0PhyyDOQH72yKnUAnJZg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 100,
    name: `
مدرسة مبارك كول الثانوية الميكانيكية المشتركة   `,
    address: "منطقة أبو رواش السكنية، إمبابة، الجيزة",
    governorate: "الجيزة",
    specialization: [`صناعي مشترك`],
    phone: "01149998070 ",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Abxc7mlN5Adpef1DkKL1D07iNm3R4gu7A&s",
    map_link: "",
    description: ``,
  },
  {
    id: 101,
    name: `
مدرسة الجيزة الثانوية الفنية الصناعية للبنات  `,
    address: "شارع 6 أكتوبر، ساقية مكي، المنيب، الجيزة",
    governorate: "الجيزة",
    specialization: [
      `صناعي عام
 `,
    ],
    phone: "02/35721363 ",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3J2J7jlaKNUJlZkvge6vNVDE7sJDwin5Eg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 102,
    name: `
مدرسة السويدي للتكنولوجيا التطبيقية 
 `,
    address: "مركز ديرب نجم الشرقية",
    governorate: "الشرقية",
    specialization: [
      `ميكانيكا وكهرباء
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/16HQfVifTq/",
    image_url:
      "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-1/274529424_695943621778976_4457331918454903688_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=M9oy15GZLikQ7kNvwF_iqWn&_nc_oc=AdkXwF2pGS2vBmz4kPZzCoe2JkVwSj9-B39Gpgh-D2blqZVwaO3wHNDhA8Mw45oUx7Q&_nc_zt=24&_nc_ht=scontent.fcai26-1.fna&_nc_gid=3mrU84-FUJwm3WIwVIe1EQ&oh=00_AfFtkqB5BFBa0Omsv_yIGSKHOv8CaYdP0L1hwiEqflcetg&oe=680D9CBF",
    map_link: "",
    description: ``,
  },
  {
    id: 103,
    name: `مدرسة الصالحية محافظة الشرقيه
`,
    address: "مدينة الصالحية محافظة الشرقيه",
    governorate: "الشرقية",
    specialization: [
      `تكنولوجيا الإنتاج الحيوانى والزراعه والرى
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/166JSfiKee/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/489922845_1171131115022237_566531937663743761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BgPAzHE-YSIQ7kNvwGBESpK&_nc_oc=AdliRFMmV7-lPtuxZID4cTfe84Vlg_yw8BntSMPF7er-9vDlk86uxTdE1lldMKaYenY&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=i510HQoE5r0-34fpgCZsFQ&oh=00_AfHsd7DTMHAdEzRC2Qmnvbk9WnfrzcsyqMCxs7_NjTCREw&oe=680D747A",
    map_link: "https://g.co/kgs/un6m5Hj",
    description: ``,
  },
  {
    id: 104,
    name: `مدرسة MCV للتكنولوجيا التطبيقية 
`,
    address: "مدينة الصالحية محافظة الشرقية ",
    governorate: "الشرقية",
    specialization: [
      `صيانة وإصلاح السيارات الثقيلة 
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1AN11qCxKY/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/278344852_163954772730557_1711983823632019241_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kMJ2yzgUtBoQ7kNvwEZfQLO&_nc_oc=AdnYRol8AXmLxjXnPYsoTHjoc6J4dSrh-YgRQonQ656KgtM-Knhj_9BXT6obKd-JT3Y&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=b2qOuVRH7l74EOiX_43FQQ&oh=00_AfFjovvTt1pK7hxbUd95SjKw_ESh8M_stHrYKGof0t4oKA&oe=680D720F",
    map_link: "",
    description: ``,
  },
  {
    id: 105,
    name: `مدرسة مدحت السويدى للتكنولوجيا التطبيقية`,
    address: "مدينة العاشر من رمضان ",
    governorate: "الشرقية",
    specialization: [
      `تكنولوجيا طباعه، اعداد واخراج جودة الطباعه، الصيانه والخدمات المعاونه للطباعة 

 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1G5qHWPuaw/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/359350779_113092821844082_5510149329334014869_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EzAzh4t3ZW0Q7kNvwGfygXh&_nc_oc=Adn_OFD-rGXLfhymHFvTzrEatL01xOZLklieyN7xuDm07OdH87YrosN5gf4XyuuHs1Q&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=unEwCM0K96eAqo2j9QyOnQ&oh=00_AfF6kGV7ZpblkmoilpUAXbh5DTHeVatnx1eAgFRFUq7lKw&oe=680D9C17",
    map_link: "",
    description: ``,
  },
  {
    id: 106,
    name: `مدرسة فريش الدولية للتكنولوجيا التطبيقية`,
    address: "مدينة العاشر من رمضان ",
    governorate: "الشرقية",
    specialization: [
      `تصنيع وصيانة الاسطمبات والطباعة ثلاثية الأبعاد
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/18x2THJrFc/?mibextid=wwXIfr",
    image_url:
      "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/434366688_122110608254248996_5703489237708110960_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=J_vLRGCambUQ7kNvwFt59sy&_nc_oc=Adlrv4c_CQ_jekBUkFfM9XYI6xxqoNSb_wgkotxGvbAOWx66rovTpGNQFPVmrtmNue0&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=kHU9AleaMELaWALc9aluyQ&oh=00_AfEqETqnWxszbDiNze4FZObuV3Mh0Yo_tF4AeqEHs-7HRw&oe=680D8E7A",
    map_link: "",
    description: ``,
  },
  {
    id: 107,
    name: `مدرسة أفروإيجبت الدولية للتكنولوجيا التطبيقية 
`,
    address: "مدينة العاشر من رمضان ",
    governorate: "الشرقية",
    specialization: [
      `تكنولوجيا تصنيع الاثاث 

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 108,
    name: `مدرسة السويدي إلكتريك الثانوية الفنية للتعليم والتدريب المزدوج`,
    address: "العاشر من رمضان",
    governorate: "الشرقية",
    specialization: [
      `فني تصنيع وتركيب وصيانة المسارات الكهربية – فني لحام وتشكيل المعادن – فني طباعة وتغليف – فني صيانة وإصلاح المعدات الثقيلة والديزل
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 109,
    name: `مدرسة مشهور الثانوية الصناعية المشتركة `,
    address: "منيا القمح",
    governorate: "الشرقية",
    specialization: [
      `فني صيانة وإصلاح السيارات

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 110,
    name: `مدرسة الحسينية الثانوية الصناعية المشتركة`,
    address: "الحسينية",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeUeTpV_OooReJzirfMyA_deA7W0jzV4jXg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 111,
    name: `مدرسة أمر الله بليغ الصناعية المشتركة`,
    address: "الإبراهيمية",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9jVB4gMUeuIVBSZJhNil8xdLbEDer9foYw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 112,
    name: `فاقوس الثانوية الصناعية للبنين`,
    address: "فاقوس",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAYhMpVRb928uRkf03xizlm-svFQI7wd_HQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 113,
    name: `مدرسة مشتول السوق الثانوية الصناعية للبنين`,
    address: "مشتول السوق",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcQAJee6qc0EerFBW9TVEzbul6LliNK-ZdQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 114,
    name: `مدرسة العصايد الثانوية الصناعية المشتركة `,
    address: "ديرب نجم",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOkg8o4bewehbv45hFdS6GcJk9vgPEzMOpg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 115,
    name: `مدرسة القرين الثانوية الصناعية المشتركة`,
    address: "القرين",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_VNEV1FhJWbtR4sJ2KOlQUUBOeat5GuZ3Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 116,
    name: `مدرسة حسن طه الثانوية الصناعية`,
    address: "أولاد صقر",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpF0RUhC1MB29MVZ7bl62ce0VVK_7TLYuBvA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 117,
    name: `مدرسة الشهيد طيار أحمد فؤاد بكر الميكانيكية للبنين`,
    address: "الزقازيق",
    governorate: "الشرقية",
    specialization: [
      `فني ديزل ومعدات ثقيلة

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 118,
    name: `مدرسة البتانون الثانوية الصناعية بنين
`,
    address: "قرية البتانون، مركز شبين الكوم",
    governorate: "المنوفية",
    specialization: [
      `شعب ميكانيكا، كهرباء، شبكات مياه وصرف صحي
 `,
    ],
    phone: "",
    website:
      "https://ar-ar.facebook.com/people/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%A8%D8%AA%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D9%87-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9/100063752692035/",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/308589776_500417182093367_545610635686960499_n.jpg?stp=c6.0.405.405a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=VYo50a6zP1MQ7kNvwF53P3o&_nc_oc=AdnLoR4merlb91kbqauLs9Ym8WOPYvNuoudw2MN7hpvCKRGET3ktrmfxefpgJtYOm2k&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=deBEAq7WhxO4B1DVMaSk_A&oh=00_AfFEhtmOTpZyQjzD9k1uE_DlLPlqwr1MDk7eYROPEJ0y5w&oe=680D9F08",
    map_link: "",
    description: ``,
  },
  {
    id: 119,
    name: `مدرسة ميت خلف الثانوية الميكانيكية بنين
`,
    address: "قرية ميت خلف، مركز شبين الكوم.",
    governorate: "المنوفية",
    specialization: [
      `ميكانيكا عامة
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 120,
    name: `مدرسة الشهيد عبد الله المولى الثانوية الزخرفية
`,
    address: "مركز شبين الكوم.",
    governorate: "المنوفية",
    specialization: [
      `زخرفة وديكور.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 121,
    name: `مدرسة قويسنا الثانوية الصناعية بنين
`,
    address: "مركز قويسنا.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQXIsCNK8PZ7iEETIe-7nmhh4BKkZONyu6g&s",
    map_link: "",
    description: ``,
  },
  {
    id: 122,
    name: `مدرسة تلا الثانوية الصناعية بنين`,
    address: "مركز تلا.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkijKYNDdMy0B9QBTBmEc0onILCfUJXWIAA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 123,
    name: `مدرسة منوف الثانوية الصناعية بنات
`,
    address: "مركز منوف.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، زخرفة.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy983seOtt7CrYCcIFNuqCCby7AA8DstpXaQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 124,
    name: `مدرسة أشمون الثانوية الصناعية بنين
`,
    address: "مركز أشمون.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1W9GK5TVWepo0CN6IGXqxy4Xvw4auKpoJA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 125,
    name: `مدرسة الباجور الثانوية الصناعية بنين
`,
    address: "مركز الباجور.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcQs-chR-yVp7BJTZy8O_x9C85F88kAbvMg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 126,
    name: `مدرسة السادات الثانوية الصناعية المشتركة
`,
    address: "مدينة السادات.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfd0Vm8sO0H0Ebkuu_bbT7MiI6EBXbwR0ig&s",
    map_link: "",
    description: ``,
  },
  {
    id: 127,
    name: `مدرسة الشهيد جمال الأشقر الصناعية بنات
`,
    address: "قرية إبنهس، مركز قويسنا.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، زخرفة.
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx7XhhVVHoN7ZnDQi8Hu1pR47FqXeiDMAtw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 128,
    name: `مدرسة العربي للتكنولوجيا التطبيقية`,
    address:
      "كفر الرمل، المنطقة الصناعية، قويسنا، بجوار مصنع الحربي، محافظة المنوفية",
    governorate: "المنوفية",
    specialization: [
      `الكهرباء، الميكانيكا، التبريد والتكييف، واللوجستيات
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-4xXAqyYox5fFDgQ5JolCXkOhksHw-kAuw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 129,
    name: `مدرسة إيفر جرو الدولية للتكنولوجيا التطبيقية`,
    address: "المنطقة 13، مدينة السادات، محافظة المنوفية.",
    governorate: "المنوفية",
    specialization: [
      `تشغيل وصيانة معدات الصناعات الثقيلة المتطورة.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1qsenblVwdifilQhxjq8fofZuVFGq5SkMw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 130,
    name: ` مدرسة ميت خلف الثانوية الميكانيكية بنين
`,
    address: "قرية ميت خلف، مركز شبين الكوم.",
    governorate: "المنوفية",
    specialization: [
      ` ميكانيكا عامة.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyNJrRdTWbMy2PaUhjXqXlGDnC-uRcOI1xQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 131,
    name: `مدرسة الشهيد عبد الله المولى الثانوية الزخرفية`,
    address: "مركز شبين الكوم.",
    governorate: "المنوفية",
    specialization: [
      ` زخرفة وديكور
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YN5aTzYEsl9nvLS1EXVN3FORP9-FM1Ctlw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 132,
    name: ` مدرسة قويسنا الثانوية الصناعية بنين`,
    address: "مركز قويسنا.",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، ميكانيكا.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5s1-fqqedSB28qKwa0i5Fcpv_TOrV_jX6w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 133,
    name: `مدرسة الشهيد جمال الأشقر الصناعية بنات`,
    address: "",
    governorate: "المنوفية",
    specialization: [
      `كهرباء، زخرفة.

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kIx3sMQobAqdRw_eOKGoWpZdqghfRMUAvg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 134,
    name: `مدرسة الرضوانية الصناعية بنين
`,
    address: "٦٢ شارع القلعه،  الدرب الاحمر",
    governorate: "القاهرة",
    specialization: [
      `• إصلاح وصيانة المعدات الكهربية
• الإلكترونيات والكمبيوتر
• التبريد وتكييف الهواء
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtTD-Lx8M_5Dii50nLmjcu97qXEJ2mTNDLQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 135,
    name: `مدرسة السادات الثانوية الصناعية 
`,
    address: " ١٢ شارع دنشواي ، متفرع من شارع جسر البحر",
    governorate: "القاهرة",
    specialization: [
      `       إصلاح وصيانة المعدات الكهربية

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jAHi2C90RmXxA6WQx15ccOsRfsK3FgmcxA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 136,
    name: `مدرسة السيدة حنيفة السلحدار الثانوية الصناعية`,
    address: "٨٠ شارع عمر بن الخطاب، مصر الجديدة، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `الكترونيات ، كهرباء ، ملابس زخرفة ، تبريد وتكييف ، جلود

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeH0nxLDBXldoi4fYXM1Qc3VDfwCqJc4eCbQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 137,
    name: `مدرسة السيدة خديجة أم المؤمنين الثانوية الصناعية
`,
    address: "طريق مصر حلوان الزراعي، كوتسيكا، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `الكترونيات ، كهرباء ، ملابس زخرفة ، تبريد وتكييف ، 

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xIqwBBkYWbb3RSR8dszXTGdF8d1ZXTp81Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 138,
    name: `مدرسة السيدة زينب الثانوية الصناعية 
`,
    address: "شارع علي خليل، متفرع من شارع بورسعيد، السيدة زينب، القاهرة ",
    governorate: "القاهرة",
    specialization: [
      `الكترونيات ، كهرباء ، ملابس زخرفة ، تبريد وتكييف ، 

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKF0K28N1nbNvwCObK6TPFHz-uyHDv3zP7vg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 139,
    name: `مدرسة العباسية الثانوية الصناعية 
`,
    address: "١٠ شارع الواعظ، متفرع من شارع رمسيس، الوايلي، القاهرة ",
    governorate: "القاهرة",
    specialization: [
      `زخرفة ، اعلان ، ملابس جاهزة
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lnuwX_3XWtXskOUgi7-6HDwGriQKgknhsA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 140,
    name: `مدرسة القاهرة الثانوية الصناعية بنات
`,
    address: "١ شارع متحف التيل، مصر القديمة، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `الكترونيات ، كهرباء ، ملابس زخرفة ، تبريد وتكييف ، 
 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKV7PsNKoYLDEdE_2MEcwH3iEXOszGCecqQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 141,
    name: `مدرسة النقل النهري الصناعية
`,
    address: "طريق مصر حلوان الزراعي، مصر القديمة، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `الملاحة النهرية والميكانيكا والكهرباء

 `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmt0DZ1hSg2VWqT_huIMgoFYYGq7cx6fa5g&s",
    map_link: "",
    description: ``,
  },
  {
    id: 142,
    name: `مدرسة النهضة الصناعية المعدنية
`,
    address: "شارع العبور، مجمع المدارس، مدينة السلام، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `يوجد بها اربع تخصصات
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1AC53W13Z5/",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/476120602_952200413716664_2268449645979713695_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=McBZI9HWcOAQ7kNvwFnonkW&_nc_oc=AdmKLxg7VHhJSmIsCDLxg4SU0Zv26QR2pfb-cPrRqGK5UJ8mCL8agTxwO-RVoZTscR8&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=UlqarlTrxAuWnN3ZxdWBvQ&oh=00_AfF46gclyiuzwJeC2v98czt9tfyi-dmpHsK6svNvH4ilzg&oe=680DB3B3",
    map_link: "",
    description: ``,
  },
  {
    id: 143,
    name: `مدرسة حلوان الثانوية الصناعية المهنية
`,
    address: " ٦ شارع ١٨، حلوان، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `ميكانيكا صيانة وإصلاح، ميكانيكا تركيبات، تحلية مياة، صيانة ميكانيكيا، فنى صناعة الأسمدة، فنى تشغيل وصيانة ماكينات الورق، فنى بترول
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/157woarqQL/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYW55x7m8gMftif7N1eVrFFDTmWnfhR4Mwg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 144,
    name: `مدرسة فولكس فاجن للتكنولوجيا التطبيقية
`,
    address: "حي الأسمرات، الاباجية، المقطم، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `تكنولوجيا السيارات

 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/p/1YwsUqtJNR/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTlOzg9WaKwvNlGNw1DpKzLJgjWEoYDxehw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 145,
    name: `مدرسة المستقبل الحديثة الثانوية الصناعية
`,
    address: "محمد زهران، صفن اللبن، بولاق الدكرور، القاهرة",
    governorate: "القاهرة",
    specialization: [
      `حاسب آلى، برمجة، تحكم آلى، الكترونيات، فنى معمل كيميائى
 `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/16Hd7NNcKX/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTl5IgHlDDpnO7RJPXxrcaFlGEfeC0Ug2vA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 146,
    name: `مدرسة البيضا الثانوية الفنية للتعليم والتدريب المزدوج`,
    address: "مساكن البيضا، كفر الدوار، البحيرة",
    governorate: "البحيرة",
    specialization: [
      `تركيبات كهربية، ملابس جاهزة، تبريد وتكييف، إلكترونيات، حاسبات

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcWvk76MX5G6CDIPlV8idgqPGr97lY4dXUA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 147,
    name: `مدرسة مياه الشرب والصرف الصحي بدمنهور
`,
    address: "شارع الجيش المصري، بجوار جزيرة البط، دمنهور، البحيرة",
    governorate: "البحيرة",
    specialization: [
      `تشغيل وصيانة محطات المياه، معامل الجودة، شبكات الصرف

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxbb6zFDmXxXt5cZwSugZB-tC5yUHYYXjjQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 148,
    name: `مدرسة الفنية بنات بدار المعلمات بدمنهور
`,
    address: "شارع الروضة، بندر دمنهور، البحيرة",
    governorate: "البحيرة",
    specialization: [
      `تشغيل وصيانة محطات المياه، معامل الجودة، شبكات الصرف

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8cK-0iUqZ7_9eHDwxl8J4JxCNGF4A9FLTA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 149,
    name: `مدرسة محمد صالح حرب الفنية المتقدمة بأسوان
`,
    address: `أسوان`,
    governorate: "أسوان",
    specialization: [
      "الحاسبات​ و الإلكترونيات​ و السيارات​ والكهرباء​ والتبريد والتكييف​",
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100064022803107&mibextid=kFxxJD",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-1/305668491_456576026486487_3407820322477433660_n.jpg?stp=c2.0.159.159a_dst-jpg_s158x159_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=L-133X7asdgQ7kNvwHycLuk&_nc_oc=AdkW9SXusjyaoXv90Prn1RWKbD9glO0c-Q5T6Mw0rwnM9giv2fSjHroFjAC4kGPQGk0&_nc_zt=24&_nc_ht=scontent.fcai20-2.fna&_nc_gid=oezl7ygHIajYkE0D0PmAZg&oh=00_AfFdVvL2HxyCoqQR4d-WIyktk-CgLtYzZbyJFu7SFTdTcA&oe=680DBA64",
    map_link: "",
    description: ``,
  },
  {
    id: 150,
    name: `مدرسة WE للتكنولوجيا التطبيقية
`,
    address: `أسيوط`,
    governorate: "أسيوط",
    specialization: [
      ` تكنولوجيا المعلومات، تكنولوجيا الاتصالات، تكنولوجيا الشبكات
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "data:image/png;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 151,
    name: `مدرسة أحمد ضيف الله الدولية للتكنولوجيا التطبيقية:
`,
    address: `تقع في حي الأربعين بجوار المدرسة الزخرفية بأسيوط`,
    governorate: "أسيوط",
    specialization: [
      `تكنولوجيا المعلومات والذكاء الاصطناعي
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/15EN8umU8k/?mibextid=wwXIfr",
    image_url:
      "data:image/jpeg;base64,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",
    map_link: "",
    description: ``,
  },
  {
    id: 152,
    name: `مدرسة المهندس ابراهيم عثمان الثانوية الصناعية بالاسماعيليه 
`,
    address: ``,
    governorate: "الإسماعيلية",
    specialization: [
      `قسم اللحام 
*قسم التبريد و التكييف 
* قسم السيارات و المعدات الحديثة 

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/AbrahemOsmanSchool/?locale=ar_AR",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn4GJD45sfmFYTGVH3BoLQKFS2VbopO6RDQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 153,
    name: `مدرسة كفر الزيات الصناعية بنات`,
    address: `شارع المدارس، كفر الزيات، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `
     `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/p/%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A-%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D9%83%D9%81%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A8%D9%86%D8%A7%D8%AA-100076332240499/",
    image_url:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/244214104_102447538883040_9114846276083887052_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DYoXtJDtlr4Q7kNvwFaE_Kf&_nc_oc=AdlvdlckY_iQMDaIf3L0H5KADIqeabWGFQFsuDPQcBYGN1dpP9oISyq_7L9BYBlNML0&_nc_zt=24&_nc_ht=scontent.fcai20-6.fna&_nc_gid=IuBMe7prRlfoA-E_4ewPKg&oh=00_AfHwJvP96JJt_vp5ZrmLzCFPiT0HUltTc40wTEcEcAFQPA&oe=680EA84B",
    map_link: "",
    description: ``,
  },
  {
    id: 154,
    name: `مدرسة الإسماعيلية المعمارية الصناعية العسكرية بنين 
`,
    address: `الإسماعيلية`,
    governorate: "الإسماعيلية",
    specialization: [
      `
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1XgPjvBT93/?mibextid=qi2Omg",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMJDKvwVbC0jkGCLuGM7IStQUlQH3kGZmJA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 155,
    name: `مدرسه الثانويه الفنيه الصناعيه للمعدات الثقيله بالاسماعيليه 
`,
    address: `الإسماعيلية`,
    governorate: "الإسماعيلية",
    specialization: [
      `المعدات الثقيله 
٢-اللوجستي 
٣- تشغيل المعادن 
٤- تشكيل ولحامل معادن 
٥- النماذج 

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/17zxCqbubJ",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YWbYmrg3cWFOprxHYiiHU3NJ8hJ8X_ogIQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 156,
    name: `مدرسه فايد الثانويه الصناعيه بنين بالاسماعيليه 
`,
    address: `الإسماعيلية`,
    governorate: "الإسماعيلية",
    specialization: [
      `
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/15wMbq73qC/?mibextid=qi2Omg",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQtRg3dFle6joet3au0uE2ED_hCft0MgRpA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 157,
    name: `مدرسه القنطره شرق الصناعيه المشتركه بالاسماعيليه 
`,
    address: `الإسماعيلية`,
    governorate: "الإسماعيلية",
    specialization: [
      `فيها قسم تبريد و تكييف 
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3repC2ekzr3dR0UAWjkUHNGR1gWJKbNBpPA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 158,
    name: `مدرسه السلام الزخفيه العسكريه بنين بالاسماعيليه 
`,
    address: ``,
    governorate: "الإسماعيلية",
    specialization: [
      `فيها تجاره اثاث
 زغف واعلان

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJebIVkTtWH9ieYrNF5BPjwdA0QXt-bcO7w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 159,
    name: `مدرسه الجامعه للتعليم والتدريب المزدوج بالاسماعيليه 
`,
    address: ``,
    governorate: "الإسماعيلية",
    specialization: [
      `الميكانيكا سكرتاريه نسيج صناعه غذائيه نجاره اثاث دهانات خدمه مطعم طاهي اشرف داخلي ملابس جاهزه كهرباء الكترونيه
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8FWOv3UFr383ObhqttD3Zf5oNe9-V2u-qA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 160,
    name: `مدرسة المنيا الفنية المتقدمة الصناعية

`,
    address: `شارع سكة تلة – المنيا
`,
    governorate: "المنيا",
    specialization: [
      `الكهرباء، الميكانيكا (تشغيل – تشكيل)، الإلكترونيات، التبريد والتكييف، الكمبيوتر

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHIce0bKbgtLUjS0TLb_gOmPxSp0sjSH5Tw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 161,
    name: `مدرسة WE للتكنولوجيا التطبيقية بالمنيا

`,
    address: ``,
    governorate: "المنيا",
    specialization: [
      `تكنولوجيا المعلومات والاتصالات، أنظمة وشبكات الحاسوب

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhJuJuWxWAiWCUgQCgkP6B0djMI2ES0BIYw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 162,
    name: `مدرسة نهر الخير للتكنولوجيا التطبيقية

`,
    address: ``,
    governorate: "المنيا",
    specialization: [
      `الهندسة الزراعية، الأراضي والمياه، الاقتصاد الزراعي، البساتين، المحاصيل الزراعية، الإنتاج الحيواني والداجني

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwb0O4lVOWL5dxB6wHsORb3mwjY69nhQ8fQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 163,
    name: `مدرسة المنيا الثانوية الفنية للتعليم والتدريب المزدوج

`,
    address: `الحي السادس – المنيا الجديدة
`,
    governorate: "المنيا",
    specialization: [
      `تركيبات كهربائية، تشكيل ولحام، فني إداري، ملابس جاهزة

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI2OrNE8CKnsxyfsO1TTVcD1ZInwP4l_Usg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 164,
    name: `مدرسة سمارت الثانوية للحسابات والالكترونيات

`,
    address: `ابوفليو حي الفلل شارع نقطه القرداحي – المنيا
`,
    governorate: "المنيا",
    specialization: [
      `الكترونيات صناعية، حاسب آلي، كهرباء صناعية، الكترونيات مكتبية

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRom_0AmJBE38YU5KcvM7YYPTF_iM2STb4vCw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 165,
    name: `مدرسة المنيا الصناعية الثانوية بنات

`,
    address: `المنيا
`,
    governorate: "المنيا",
    specialization: [
      `جدارات، دمج، عمال، خدمات

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZsCiU_LXKoToDRE3GgNJ2q9t6lKfFSlFSA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 166,
    name: `مدرسة المنيا الفنية المتقدمة الصناعية ٥ سنوات

`,
    address: `ثان المنيا
`,
    governorate: "المنيا",
    specialization: [
      `تشغيل مكني، سيارات، تبريد وتكييف الهواء، حاسبات

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IuqIwonYbqJDFGJr_1CLvwV4MrFrjIqmng&s",
    map_link: "",
    description: ``,
  },
  {
    id: 167,
    name: `مدرسة مطروح الثانوية الصناعية بنات
`,
    address: `مطروح`,
    governorate: "مطروح",
    specialization: [
      `زخرفة-كهرباء -صباغة -مطبوعات -مشغولات يدوية
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOSv9IKgdlfVAiWrP_kAFxQe-rLjP3KpgEg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 168,
    name: `مدرسة مطروح الثانوية الصناعيه العسكرية 

`,
    address: `الكيلو 2 بمرسي مطروح`,
    governorate: "مطروح",
    specialization: [
      `
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1BivB2cNM3/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgjhzftGX3Y9K9-mHoP7dOJCQTV4MvLHLSg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 169,
    name: `مدرسة الأقصر الثانوية الصناعية الميكانيكية بنين
`,
    address: ``,
    governorate: "الاقصر",
    specialization: [
      `الميكانيكا 
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIepnCo0RiofrWOh-JykVs3mhb8LzawchEg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 170,
    name: `مدرسة الأقصر الثانوية الزخرفية بنين
`,
    address: `شارع الصنايع ، الاقصر
`,
    governorate: "الاقصر",
    specialization: [
      `الزخرفه
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-4heAQJEBZvN-FJghVkEGqrHRaOVT-HMyw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 171,
    name: `مدرسة إسنا الثانوية الصناعية بنين
`,
    address: `شارع الكورنيش ، إسنا ، الاقصر
`,
    governorate: "الاقصر",
    specialization: [
      `الصناعات المختلفه
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5t3OvnUZO7P_XoO1k4fx2S9Q4r8gMTllDZQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 172,
    name: ` مدرسة العديسات الثانوية الصناعية المشتركة
`,
    address: `الاقصر`,
    governorate: "الاقصر",
    specialization: [
      ` الصناعات المختلفه

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93dHVEhgeNh_qb-V_BzqQQaolrWWveMt__Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 173,
    name: `مدرسة العشى الثانوية الصناعية المشتركة
`,
    address: `قريه العشي ، الاقصر
`,
    governorate: "",
    specialization: [
      ` الصناعات المختلفه 

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxq6avEXjZSwfnz4oWdlTTHqkH2S2cUBwj_w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 174,
    name: `مدرسة الدير الثانوية الصناعية المشتركة
`,
    address: `لدير شرق ، إسنا ، الاقصر`,
    governorate: "",
    specialization: [
      `الصناعات المختلفه 
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUx4u68QXXY8ZmVPYYkjHXmcNU0kcENjOB2Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 175,
    name: `مدرسة أرمنت الثانوية الزخرفية بنين
`,
    address: `شارع البحر ، أرمنت ، الاقصر
`,
    governorate: "الاقصر",
    specialization: [
      `الزخرفه
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4z0pAvW2Up7G8H5sL97MLK4sXAozItyxvzQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 176,
    name: `مدرسة أرمنت الثانوية الميكانيكية بنين
`,
    address: `قريه حاجر ابو قليعي ، أرمنت ، الاقصر
`,
    governorate: "الاقصر",
    specialization: [
      `الميكانيكا
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNmnaPxPss0vBR-1cbxdI8Sm4Q6nGKXiZ7g&s",
    map_link: "",
    description: ``,
  },
  {
    id: 177,
    name: `مدرسة إسنا الثانوية الفنية التجارية بنات
`,
    address: ``,
    governorate: "الاقصر",
    specialization: [
      `الميكانيكا
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInNLkdGjfWXby6xsaDHp6DewF2dm5mzjB6Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 178,
    name: `إسنا الثانوية الفنية التجارية بنين
`,
    address: `إسنا، الأقصر
`,
    governorate: "الاقصر",
    specialization: [
      `التجارة
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3m6AhI47LAj63GaiTKMi6mtVsgBKhb3U0FA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 179,
    name: `مدرسة سي إف سي الدولية للتكنولوجيا التطبيقية
`,
    address: `مدينة نجع حمادي`,
    governorate: "قنا",
    specialization: [
      `تقدم تخصصات في تشغيل وصيانة معدات الصناعات الثقيلة والمتطورة
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1AGzR4Z5Cj/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2WGHZXsk3JqFe3wtzlBr2RDsPCy7hEA7Hw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 180,
    name: `مدرسة we للتكنولوجيا التطبيقية 
`,
    address: `بجوار مدرسة قنا الفنية الصناعية المتقدمة العسكرية
`,
    governorate: "قنا",
    specialization: [
      ` 
*الاتصالات*:  
*شبكات وأمن المعلومات*:  
 *تطوير المواقع والبرمجيات*:

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/18cfcTHAVL/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLJUZCTcr_wYWJ_cJi44qR-FE2Rt9rj3uyw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 181,
    name: `مدرسة الوقف الثانوية الصناعية العسكرية المشتركة
`,
    address: `تقع في مركز الوقف بمحافظة قنا وتحديداً في منطقة حاجز الجبل`,
    governorate: "قنا",
    specialization: [
      `- فني نجارة الاثاث 
٢-فني التبريد وتكييف الهواء 
٣-فني الملابس الجاهزة
٤-فني زخرفة وديكور
٥- فني التركيبات الكهربائيه 
٦- فني شبكات المياه والأعمال الصحية

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/12D5kzbiikr/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJNEeoS77Qifdpp8GkuTxJUyjAnHrfbOSww&s",
    map_link: "",
    description: ``,
  },
  {
    id: 182,
    name: `مدرسة قنا الثانوية الصناعية بنات
`,
    address: `تقع في شارع مصطفى كامل بمدينة قنا `,
    governorate: "قنا",
    specialization: [
      `الزخرفة
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/288091068345572/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQVIfJWnSb6Lw7blWFL2qceX60SSuSqLIcw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 183,
    name: `مدرسة قنا الفنية المتقدمة الصناعية
`,
    address: `قنا`,
    governorate: "قنا",
    specialization: [
      `* إلكترونيات 
* تبريد 
* كهرباء 
* ميكانيكا تشغيل 
* ميكانيكا 
* لحام
* سيارات 
* جرارات 
* ملابس جاهزة
* غزل

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/19Z1dxg2rF/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxC-QTstPlC_pfeOcpezY7GLOh7fCUwCISxA&s",
    map_link: "",
    description: ``,
  },
  {
    id: 184,
    name: `مدرسة أبوتشت الثانوية الصناعية المشتركة
`,
    address: ` عزبة البوصة، أبو تشت، محافظة قنا
`,
    governorate: "قنا",
    specialization: [
      `الأقسام الميكانيكية 
الأقسام الزخرفية
الأقسام الميكانيكية بنظام التعليم المزدوج
الأقسام الزخرفية بنظام التعليم المزدوج 
الأقسام الميكانيكية بنظام الثلاث سنوات 
الأقسام الزخرفية بنظام الثلاث سنوات 


   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYBmR_EGEtoykjh87OYot_FPealf3ZL0nNg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 185,
    name: `مدرسة أبومناع بحري الثانوية الصناعية بنين
`,
    address: `مناع بحري، مركز دشنا، محافظة قنا
`,
    governorate: "قنا",
    specialization: [``],
    phone: "",
    website:
      "https://www.facebook.com/groups/555480304574553/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI9sprjIGlh2aa3HSaEismbiP6XM-yoHl0A&s",
    map_link: "",
    description: ``,
  },
  {
    id: 186,
    name: `مدرسة الأشراف الثانوية الصناعية المشتركة
`,
    address: `تقع في قرية الاشراف`,
    governorate: "قنا",
    specialization: [
      `تخصص الكهرباء
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/1630630103769028/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImymfcy_zDm3DeYrOPSxemN1Vg_LJZuQkwQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 187,
    name: `مدرسة الشهيد سعد هاشم بهلول الثانوية الصناعية المشتركة
`,
    address: `شارع الشنوبة، الرحمانية قبلي، نجع حمادى، محافظة قنا
`,
    governorate: "قنا",
    specialization: [
      `الميكانيكا
الكهرباء 
الالكترونيات 
الانشاءات 
العمارة 

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/3826965910736528/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6xLRdg9fnxsO4Kyq8YoYPTpuDCY_T2Soog&s",
    map_link: "",
    description: ``,
  },
  {
    id: 188,
    name: `مدرسة الطويرات الثانوية الصناعية بنين
`,
    address: `قرية التطويرات - قنا
`,
    governorate: "قنا",
    specialization: [
      `قسم الزخرفة 
قسم تكنولوجيا المعلومات 
قسم الكهرباء 
قسم الميكانيكا 

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/885921424866470/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJiifiN-6j_3yl9H_4x36zSspjceFlYJR7Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 189,
    name: `مدرسة طيبة للتكنولوجيا التطبيقية في الحاسب الآلي

`,
    address: `شرق النيل ، بني سويف
`,
    governorate: "بني سويف",
    specialization: [
      `برمجة وتطوير البرمجيات 
الشبكات وأمن المعلومات 
صيانة الحاسب الآلي 
قواعد البيانات وتحليل البيانات   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25CvE_vTfyQP0s-8PR-jAAO4saZ90DyfVzQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 190,
    name: `مدرسة بنك مصر للتكنولوجيا التطبيقية وصناعة مواد البناء

`,
    address: `محافظة بني سويف`,
    governorate: "بني سويف",
    specialization: [
      `فحص واختيار بلوكات الرخام 
الصيانة العامة لخطوط الجلي
صيانه شاسيهات SPD

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/12E7PGpeawD/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5FCWTiqqnn8uQ2-FBropospSZGz1ImOUUw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 191,
    name: `مدرسة إهناسيا الصناعية العسكرية بنين
`,
    address: `مدينة إهناسيا ، بني سويف 
`,
    governorate: "بني سويف",
    specialization: [
      `الصناعات الكهربائية 
الميكانيكا 
الزخرفة والإعلان 
التركيبات والمعدات الكهربائية 

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/267058674149354/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHPM4IVpnMiMWtQWDdZeHXy56_Lpr3wrFeQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 192,
    name: `مدرسة بني سويف المعمارية
`,
    address: `بني سويف 
`,
    governorate: "بني سويف",
    specialization: [
      `قسم المباني
قسم التشطيبات المعمارية
قسم الخرسانة 
قسم النجارة
قسم الأعمال الصحية

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/161ts8Gnsp/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJTlppAfcue4UAka_s9caGGef3JTrPwWg_A&s",
    map_link: "",
    description: ``,
  },
  {
    id: 193,
    name: `مدرسة بني سويف الزخرفية بنات
`,
    address: `مدينة بني سويف صلاح سالم 
`,
    governorate: "بني سويف",
    specialization: [
      `فنون الزخرفة على الخامات المختلفه مثل الخشب ، الزجاج ، المعادن 
وتعلم تقنيات الرسم والتصميم
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBXUXMZlZId4c95sWTn1ewgIlojD1S8BU5Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 194,
    name: `مدرسة الشهيد محمد صفوت للصناعات المتقدمة شرق بنين
`,
    address: `الحي الثالث 
`,
    governorate: "بني سويف",
    specialization: [
      `الميكانيكا العامة 
الكهرباء والالكترونيات 
التبريد و التكييف
التركيبات المعمارية 
الزخرفة والإعلان

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/362085401575191/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuo_NPOteYyYadAQHSQAIO20lAIFe7d3rlw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 195,
    name: `مدرسة بني سويف الميكانيكية العسكرية بنين
`,
    address: `صلاح سالم بني سويف`,
    governorate: "بني سويف",
    specialization: [
      `الميكانيكا العامة
الكهرباء
اللحام
صيانة المعدات الكهربائية والميكانيكية
تجميع وتشطيب المنتجات الصناعية 

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1FXeHssaPU/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwO0Cq2X5nfMsu4hMZ661bOX_8mDrygNzBg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 196,
    name: `مدرسة بني سويف الكهربائية العسكرية بنين
`,
    address: `شارع صلاح سالم ، بجوار مديرية التربية والتعليم في بني سويف
`,
    governorate: "بني سويف",
    specialization: [
      `التركيبات الكهربائيه 
التحكم الكهربائي
الآلات الكهربائية
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/16JJ499SrQ/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIvYBWqO8QPNGIVgTrgfA24dpzT3aKZscxw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 197,
    name: `مدرسة بني سويف الفنية المتقدمة الصناعية
`,
    address: `في الحي الثالث شرق النيل
`,
    governorate: "بني سويف",
    specialization: [
      `
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/362085401575191/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUfDTgLchNNoTKjs2wAsRbEAhz8USnXrp5g&s",
    map_link: "",
    description: ``,
  },
  {
    id: 198,
    name: `مدرسة وي للتكنولوجيا التطبيقية بالوادي الجديد

`,
    address: `الوادي الجديد
`,
    governorate: "الوادي الجديد",
    specialization: [
      `تكنولوجيا المعلومات والاتصالات
شبكات وأمن المعلومات
برمجة وتطوير البرمجيات


   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/12Kv9h2ANCg/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsygVL5wt0PpDOR97U9UELmN4VCJoxbrZvQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 199,
    name: `مدرسة المحاميد الثانوية الصناعية المشتركة

`,
    address: `المحاميد، مركز إدفو، محافظة أسوان`,
    governorate: "أسوان",
    specialization: [
      `. قسم الكهرباء.
2. قسم الميكانيكا.
3. قسم النجارة.
4. قسم التبريد والتكييف.

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100063884268711&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhllz9Y6glGZMiYLExImf8__wuKe56nUXCeQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 200,
    name: `مدرسة الشراونة الثانوية الصناعية بأسوان

`,
    address: `أسوان`,
    governorate: "أسوان",
    specialization: [
      ` الكهرباء، الميكانيكا، والتبريد والتكييف، وغيرها من التخصصات اللي السوق محتاجها.

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100063906106701&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M2AF3WkEb7d5IeZ5vhwMNVsX7_IbNTo82Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 201,
    name: `مدرسة الرمادي بحري الثانوية الصناعية – أسوان

`,
    address: `قرية الرمادي بحري – مركز إدفو – محافظة أسوان`,
    governorate: "أسوان",
    specialization: [
      `قسم التركيبات الكهربائية  
- قسم الملابس الجاهزة  
- قسم الزخرفة والإعلان

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/groups/150238743560742/?ref=share&mibextid=NSMWBT",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmID3R2fusOix3Kke0oFf2Rp6D2Rpv8xydzw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 202,
    name: `مدرسة الرئيسيه الثانوية الصناعية المشتركة 
`,
    address: `قرية الرديسية – مركز إدفو – محافظة أسوان – مصر.
`,
    governorate: "أسوان",
    specialization: [
      `- قسم التركيبات الكهربائية  
- قسم التكييف والتبريد  
- قسم اللحام  
- قسم الملابس الجاهزة  
- قسم الزخرفة والإعلان

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/groups/379982132373743/?locale=ar_AR",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKOp_BVwkhpkgAyz_xAkrIoINkh7vKZ3nqQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 203,
    name: `مدرسة البصيلية الثانوية الصناعية بنين
`,
    address: `قرية البصيلية – مركز إدفو – محافظة أسوان – مصر.
`,
    governorate: "أسوان",
    specialization: [
      `- قسم التركيبات والمعدات الكهربائية: يركز على تدريب الطلاب في مجال التركيبات الكهربائية وصيانة المعدات الكهربائية.

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/edfuedu?mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CjMcgbsKmeicpfUa-AsavrKxw9JRWcubeQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 204,
    name: `مدرسة إدفو الثانوية الصناعية بنات – أسوان 

`,
    address: `شارع المدرسة الصناعية – مدينة إدفو – محافظة أسوان – مصر.
`,
    governorate: "أسوان ",
    specialization: [
      `- قسم الملابس الجاهزة: يركز على تدريب الطالبات على تصميم وإنتاج الملابس.
- قسم الزخرفة والديكور: يعنى بتعليم الطالبات فنون التصميم والزخرفة والديكور الداخلي والخارجي.
- قسم الكهرباء: يُدرّس الطالبات تقنيات التركيبات الكهربائية وصيانة الأجهزة الكهربائية.


   `,
    ],
    phone: "",
    website: "https://www.facebook.com/Edfo.Elfanya.banat?mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUBLmRvQgoXD8UbNNfItt5HurRTVTz-HTRQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 205,
    name: `مدرسة إدفو الثانوية الصناعية بنين – أسوان
`,
    address: `شارع المدرسة الصناعية – مدينة إدفو – محافظة أسوان – مصر.
`,
    governorate: "أسوان",
    specialization: [
      `- قسم الكهرباء: يركز على تدريب الطلاب في مجال التركيبات الكهربائية وصيانة الأجهزة الكهربائية.
- قسم الميكانيكا: يشمل تخصصات مثل تشغيل المعادن، الخراطة، واللحام، حيث يتعلم الطلاب مهارات تشكيل وتشكيل المعادن.
- قسم التبريد والتكييف: يُدرّس الطلاب تقنيات تركيب وصيانة أنظمة التبريد والتكييف.
- قسم الزخرفة والديكور: يهتم بتعليم الطلاب فنون التصميم الداخلي والخارجي، والرسم الهندسي.
- قسم الملابس الجاهزة: يركز على تدريب الطلاب في مجال تصميم وتصنيع الملابس.
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100064205857541&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL0soV90pPJuj8preL9LXvG6cJA4TwhNqEw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 206,
    name: `مدرسة أحمد إبراهيم الشريف الثانوية الصناعية المشتركة بالبصيلية – أسوان
`,
    address: `قرية البصيلية بحري – مركز إدفو – محافظة أسوان – مصر.
`,
    governorate: "أسوان",
    specialization: [
      `- قسم اللحام وتشكيل المعادن  
  يركز على تدريب الطلاب على تقنيات اللحام وتشكيل المعادن المختلفة.
- قسم الأثاث المعدني  
  يُعنى بتصميم وتصنيع الأثاث باستخدام المعادن. 
- قسم الزخرفة والديكور 
  يُدرب الطلاب على فنون التصميم والزخرفة والديكور الداخلي والخارجي. 
- قسم الملابس الجاهزة  
  يركز على تصميم وإنتاج الملابس الجاهزة، مع التركيز على المهارات العملية في الخياطة والتفصيل.
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/asasmadne?mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6kPapqWJmHLExok60SxBQp3f4_jSbWRLvQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 207,
    name: `مدرسة الطاقة الشمسية في أسوان
`,
    address: `:تقع المدرسة في قرية بنبان التابعة لمركز دراو بمحافظة أسوان، بالقرب من مشروع محطة بنبان للطاقة الشمسية
`,
    governorate: "أسوان",
    specialization: [
      `. قسم الطاقة الشمسية (الأنظمة الكهروضوئية)  
   - ده القسم الأساسي في المدرسة، وبيتم فيه تدريب الطلاب على تركيب وصيانة وتشغيل أنظمة الطاقة الشمسية.
   - بيتعلموا كمان كيفية تصميم الأنظمة دي للمنازل والمشروعات الكبيرة زي محطة بنبان!
. قسم التركيبات الكهربائية 
   - بيتعلم فيه الطلاب أساسيات الكهرباء وتوصيلاتها، وده مهم جدًا علشان كل نظام شمسي محتاج توصيل كهربي سليم وآمن.
. قسم الإلكترونيات والتحكم 
   - بيدرسوا فيه مبادئ التحكم في الأجهزة الكهربائية باستخدام دوائر إلكترونية، وده بيساعدهم في فهم تركيب وتشغيل منظمات الشحن والعاكسات (inverters).
. قسم التبريد والتكييف باستخدام الطاقة الشمسية (بعض الدفعات)
   - قسم متطور بيتعلم فيه الطلاب إزاي يتم استغلال الطاقة الشمسية في تشغيل أجهزة التبريد، وده مجال جديد ومطلوب جدًا.
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/ArabSolarSchool/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY55v5QrYH_m7sbA8Zf1j4l2YQcYbVrCr63w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 208,
    name: `مدرسة نصر النوبة الثانوية الصناعية بنات  أسوان
`,
    address: `اسوان شارع 23 يوليو
`,
    governorate: "أسوان",
    specialization: [
      `- قسم الزخرفة والإعلان والتنسيق: بيدرب البنات على التصميم والرسم والإبداع الفني.  
- قسم الملابس الجاهزة : بيعلم التفصيل والخياطة وتصميم الأزياء بشكل احترافي.

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/MdrstNsrAlnwbtAlthanwytAlsnaytBnat?mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnKxCmfKpoxOFCwXqyzRuXGsaSdUW6KGJIw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 209,
    name: `مدرسة كوم أمبو الثانوية الصناعية (بنين وبنات) في أسوان

`,
    address: `شارع مصنع السكر، كوم أمبو، أسوان
`,
    governorate: "أسوان",
    specialization: [
      ` الزخرفة و الملابس الجاهزة، وتهدف لتأهيل الطالبات مهنياً وفنيًا.

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100066742974718&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnKxCmfKpoxOFCwXqyzRuXGsaSdUW6KGJIw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 210,
    name: `مدرسة كلابشة الصناعية بنات في أسوان

`,
    address: ` تقع في مدينة كلابشة، التابعة لمركز نصر النوبة في محافظة أسوان.
`,
    governorate: "أسوان",
    specialization: [
      `الزخرفة و الملابس الجاهزة وبتأهل الطالبات لسوق العمل من خلال التدريب العملي والدراسة الفنية.
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100054471879751&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEP1frPIEvF7aIQ7OsXAzvM6x8m88gb8yNSQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 211,
    name: `مدرسة كمال نوبي الثانوية الصناعية الكهربائية بنين – أسوان

`,
    address: `محافظة أسوان – مصر
`,
    governorate: "أسوان",
    specialization: [
      `متخصصة في المجال الكهربائي والميكانيكا الدقيقة.
- بتؤهلك تدخل معهد أو كلية بعد كده لو حابب تكمل دراستك.
التخصص الرئيسي:
قسم الميكاترونيك (اللي هو مزيج بين الكهرباء، الميكانيكا، والتحكم الآلي)  
يعني بتتعلم كيف تتحكم في الأنظمة الحديثة اللي بتشتغل بالكهرباء والكمبيوتر.

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100057387882414&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5nNs0oPIX4r1n6BtwYbKfuAS-lzMIrqLpw&s",
    map_link: "",
    description: ``,
  },
  {
    id: 212,
    name: `مدرسة بنبان الصناعية بنات

`,
    address: `قرية بنبان - مركز دراو - أسوان.`,
    governorate: "أسوان",
    specialization: [
      `- قسم الطاقة الشمسية  
- قسم الملابس الجاهزة 
   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_SQIAo4NXJD-jusEBZ_BOJKL1pK8-nqK8w&s",
    map_link: "",
    description: ``,
  },
  {
    id: 213,
    name: `مدرسة دراو الثانوية الصناعية بنات
`,
    address: `مركز دراو، محافظة أسوان، مصر.
`,
    governorate: "أسوان",
    specialization: [
      `- قسم الكهرباء  
- قسم الميكانيكا  
- قسم التبريد والتكييف  
- قسم النجارة  
- قسم السيارات

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100064119876744&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZURn1CKFXMopfTaUMoogqoCQq35EPyQj9Q&s",
    map_link: "",
    description: ``,
  },
  {
    id: 214,
    name: `مدرسة الطويسة الثانوية الصناعية بنين في أسوان
`,
    address: `تقع في قرية الطويسة بمركز دراو – أسوان.
`,
    governorate: "أسوان",
    specialization: [
      ` - كهرباء تركيبات
  - تبريد وتكييف
  - لحام ومعادن
  - زخرفة وديكور
  - نجارة أثاث
  - تشغيل المعادن

   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100076427626675&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoVdESFHZImHNG1kohdkEWelv_nYee9Rz5A&s",
    map_link: "",
    description: ``,
  },
  {
    id: 215,
    name: `مدرسة عبد الشكور حجازي الثانوية الفنية للبنات

`,
    address: `تقع في غرب أسوان، تحديدًا في نجع القبة`,
    governorate: "أسوان",
    specialization: [
      `تقدم المدرسة برامج تعليمية فنية متنوعة تهدف إلى تأهيل الطالبات في مجالات صناعية مختلفة.

   `,
    ],
    phone: "",
    website: "",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LRilQOA_DrZ-vPkC3F8JKArOtQNvFGripQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 216,
    name: `مدرسة أبو الريش الثانوية الصناعية بنات في أسوان

`,
    address: `أسوان`,
    governorate: "أسوان",
    specialization: [
      `- تركيبات ومعدات كهربائية
- فني ملابس جاهزة
- تريكو آلي وتطريز
- زخرفة وديكور
- إلكترونيات
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100064868280745&mibextid=kFxxJD",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/428614273_802423755263227_981390839810229270_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=UnqqEtb3GkwQ7kNvwGIhX1Z&_nc_oc=Adl7WWnEJcckH3S1BNLOtHF3reEBeMpmuMKvcuzPLPSTfHmJvfOsMOkpS4E6enq6RHk&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=jdIv0f5bSjln6-NV8Ub8hQ&oh=00_AfFaeoherNNxdLg9VDh2vXzVQ-0xIi2CAgNMjXD_D_JWuA&oe=680DDD0A",
    map_link: "",
    description: ``,
  },
  {
    id: 217,
    name: `مدرسة المهندس محمد حسين هلال الميكانيكية العسكرية

`,
    address: `أسوان`,
    governorate: "أسوان",
    specialization: [
      `سم هندسة السيارات (شعبة مركبات): يوفر تعليمًا متخصصًا في مجال هندسة السيارات والمركبات. 
قسم الكهرباء والإلكترونيات العملية: يركز على تدريس مواد متعلقة بالكهرباء والإلكترونيات. 
   `,
    ],
    phone: "",
    website: "https://www.facebook.com/groups/524776698306962",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_v9QI-HQtkrUEh_mdXAfHF-WTBptQYR9ljg&s",
    map_link: "",
    description: ``,
  },
  {
    id: 218,
    name: `مدرسة الشهيد محمد محسن شعيب الثانوية الصناعية للبنات بأسوان

`,
    address: `شارع البركة – أمام عطارة كارفور – أسوان – جمهورية مصر العربية
`,
    governorate: "أسوان",
    specialization: [
      `تخصص الحاسبات: تم إنشاؤه في عام 2014، ويُعنى بتعليم تقنيات الحاسوب وتطبيقاته المختلفة.​
تخصص أجهزة إلكترونية: يهتم بدراسة وصيانة الأجهزة الإلكترونية.​
تخصص ملابس جاهزة: يركز على تصميم وإنتاج الملابس الجاهزة.​
تخصص  تريكو آلي وتطريز: يُعنى بفنون الحياكة والتطريز باستخدام الآلات الحديثة.​
تخصص زخرفة وديكور: يهتم بتعليم فنون الزخرفة والتصميم الداخلي.​
تخصص تجميل: يختص بتعليم مهارات العناية بالبشرة والشعر والمكياج.​
التجميل الذي تم افتتاحه لأول مرة في أسوان.
   `,
    ],
    phone: "",
    website:
      "https://www.facebook.com/profile.php?id=100067562956919&mibextid=kFxxJD",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpB-mEKHLOjocy6OvuA8HksLLtO4o7QnoZ5A&s",
    map_link: "",
    description: ``,
  },
  {
    id: 219,
    name: `مدرسه هواره الفنيه الصناعيه المتقدمه
`,
    address: `هواره المقطع بعزبه علي فراج طريق الفيوم
`,
    governorate: "الفيوم",
    specialization: [
      `التبريد والتكييف ، آلات ومعدات الكهرباء ،سيارات ، جرارات وآلات زراعيه ، تشغيل مكني، تشكيل واللحام ، نجاره الأثاث 

   `,
    ],
    phone: "01067694099",
    website: "https://www.facebook.com/share/16TH4yvzmi/",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/487487717_1226926875885258_3041864413995331324_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=KijCGnpnjsgQ7kNvwHoa6az&_nc_oc=AdmbI2Erf-9K23-nf2SlEAMil3NcoIpgBYX-m19zGXjp02MbANGgoLTxc9DFjNS5cYI&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=LsB7ZPQ-LpCmjwZ8WqdjnQ&oh=00_AfFICV5pjfC-9vTODbq3fMLVw3e7RLUHhzOdptPqWDpxMQ&oe=680EA6BB",
    map_link: "",
    description: ``,
  },
  {
    id: 220,
    name: `مدرسه الفيوم الثانويه الزخرفيه العسكريه بنين
`,
    address: `
`,
    governorate: "الفيوم",
    specialization: [
      `التبريد والتكييف ، آلات ومعدات الكهرباء ،سيارات ، جرارات وآلات زراعيه ، تشغيل مكني، تشكيل واللحام ، نجاره الأثاث 

   `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/18jLJ6Ziq3/",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn4GJD45sfmFYTGVH3BoLQKFS2VbopO6RDQ&s",
    map_link: "",
    description: ``,
  },
  {
    id: 221,
    name: `مدرسه الفيوم الصناعيه الميكانيكيه المعمارية بكيمان فارس
`,
    address: `كيمان فارس غرب الفيوم

  `,
    governorate: "الفيوم",
    specialization: [
      `تبريد والتكييف ، آلات ومعدات الكهرباء ،سيارات
     `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/g/15xv8kiKRb/",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/386227715_10212721345423750_7655693166995922802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2285d6&_nc_ohc=C4gpgmbpUBYQ7kNvwHgrum7&_nc_oc=AdnV0bJjrU9y0654X6CWU7RKZb03hGmWPSdakY9wojLMxVSzQpkoXD8cVg4ILey9TSo&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=0VXhi3XeeTNKLYCniS5dpA&oh=00_AfH6oyj-fdUuksXDw0MrUyOjZ68V4e79fZ0D-yoYGsT88A&oe=680EC699",
    map_link: "",
    description: ``,
  },
  {
    id: 222,
    name: `مدرسه الفيوم الميكانيكيه الصناعيه العسكريه 
`,
    address: `الفيوم ، المدينه الصناعيه خلف مدرسه عزه الزيدان للغات

  `,
    governorate: "الفيوم",
    specialization: [
      `ميكانيكا سيارات/ تبريد وتكييف / كهرباءتوصيلات / نقش وزخرفة / أجهزة منزلية / تشغيلماكينات / لحام / معمل لغات / تفصيل وخياطة/راديو وتليفزيون / سباكة صحية.

     `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/1BayM7ok8c/",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/480754421_10214500049610243_3676134714204868991_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=w-L2PahCOrcQ7kNvwHNDenO&_nc_oc=AdktXAjNhwTqWwtrZrm7xrZcclk1CqpqZjhly6eBb61HOMKnvywVri13QQV19ELq8VE&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=0G-EnaSdgX4yLDJNnRMj1Q&oh=00_AfFXEozmvQzzJAomakclKgoNUw4uFz5qI5K241dOjMqyGQ&oe=680EC98F",
    map_link: "",
    description: ``,
  },
  {
    id: 223,
    name: `مدرسة محمد صلاح الصناعية ببسيون
`,
    address: `شارع المدارس، بسيون، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `
     `,
    ],
    phone: "",
    website: "https://www.facebook.com/MdrstBsywnAlsnayt/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/274729057_404341978164757_1312400539993995411_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DZSMz8qXZEYQ7kNvwH_Hji0&_nc_oc=AdnJPYjtRzB5_heV6bAl6ukqIxqlkfaR_AVqp45q5hSdguCdS2WDWG0IrSaRxYwmchY&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=JZQcV0_jKRz16cgjw1wZWg&oh=00_AfGgYwn5n0UY6V-oTu09J79T55a3SwT57FXWoXbdd92jFA&oe=680EC30C",
    map_link: "",
    description: ``,
  },
  {
    id: 224,
    name: `مدرسة المحلة الكبرى الثانوية الميكانيكية العسكرية
`,
    address: `شارع الجيش، المحلة الكبرى، الغربية.
  `,
    governorate: "الغربية",
    specialization: [
      `تبريد والتكييف ، آلات ومعدات الكهرباء ،سيارات
     `,
    ],
    phone: "",
    website: "https://www.facebook.com/Mahallamechanical/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-1/310201793_480540657421466_2457613412004115171_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=xnpIXGJ7MjUQ7kNvwHXG07F&_nc_oc=AdlIMV7sjlRF_NwNp0_jim5ySpp4fzhqSlBivs9opaRRjwy7dDOalEYstQM9vElob-k&_nc_zt=24&_nc_ht=scontent.fcai20-2.fna&_nc_gid=mt-JeVn3dZ9dPJInym41Pg&oh=00_AfGjDLCOzf0Qxq_kk3QcON-JphpSrByyZU3d40kFpomAjw&oe=680EBED3",
    map_link: "",
    description: ``,
  },
  {
    id: 225,
    name: `مدرسة السنطة الصناعية بنين
`,
    address: ` شارع المدارس، السنطة، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `قسم الانظمه الكهربائيه والكهروضوئيه ، انظمه صيانه وإصلاح السيارات ،قسم التصنيع قسم صيانه التبريد وتكييف الهواء`,
    ],
    phone: "",
    website:
      "https://www.facebook.com/p/%D9%85%D9%84%D8%AA%D9%82%D9%8A-%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%B3%D9%86%D8%B7%D9%87-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D9%87-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%B3%D9%83%D8%B1%D9%8A%D9%87-%D8%A8%D9%86%D9%8A%D9%86-100063830176509/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/312454518_527312729406395_6384741577586661520_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=8pXQ9STcLuMQ7kNvwFTB2Xa&_nc_oc=Admp_dhcEU0HhRTiMlbi6-mP1dNzF74-uKU7zmywhuByR7Neq91xo-fPGuyWXX30Hvc&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=uFJHPNUs1uU_kfSvyf-9FQ&oh=00_AfEhhs2DmneIDZF0ysYtAGVOSEC4Tm0eAbo1IVv55HAbOQ&oe=680EAEE0",
    map_link: "",
    description: ``,
  },
  {
    id: 226,
    name: `مدرسة زفتى الثانوية الصناعية بنات
`,
    address: `شارع البحر، زفتى، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `قسم الانظمه الكهربائيه والكهروضوئيه ، انظمه صيانه وإصلاح السيارات ،قسم التصنيع قسم صيانه التبريد وتكييف الهواء`,
    ],
    phone: "",
    website:
      "https://www.facebook.com/p/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9-%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9-%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%B2%D9%81%D8%AA%D9%89-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A8%D9%86%D8%A7%D8%AA-100083359171538/",
    image_url:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/474010205_584862804175278_4951632311122935161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=MaoEXE5Go6oQ7kNvwF93Vem&_nc_oc=Adn4kfUWx7KT_B3S3xY2eOudT0VbF6ApoEztdXDTNhjieq8pYEUSln_TpgQRBUqmHtU&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=QxoK6hbdz1alpR7cK3sWBA&oh=00_AfF6gWyHthH5PdYCk9MjzMRmCb3aPiTa58iuhGiQDUOPYQ&oe=680ECE5A",
    map_link: "",
    description: ``,
  },
  {
    id: 227,
    name: `مدرسة الشين الثانوية الصناعية للبنات
`,
    address: `قرية الشين، مركز قطور، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `فنى تكنولوجيا الصناعات الحيوية :
فنى تكنولوجيا الصناعات الدوائية
فنى تشغيل ماكينات البلاستيك
فنى تصنيع الحلى المعدنية والمجوهرات
فنى انتاج مكونات طاقة (كابلات )
فنى انتاج مكونات طاقة (محولات )
فنى ميكانيكا صيانة وإصلاح (سيمنس)
فنى تشكيل ولحام المعادن
     `,
    ],
    phone: "",
    website: "https://www.facebook.com/share/g/12MpJvUwGMi/",
    image_url:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/464788522_8621537754603986_6327636495804048299_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2285d6&_nc_ohc=tR4_gG1xgOgQ7kNvwFnlxc1&_nc_oc=Adl9oXpAxS9LTx2xnmwj6m2GaO6ANzZu6uc2GyOhHQrnrfGoKtTxnuLVr5m2YJbbJws&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=FzYsVmUoEj1iS2BgM_qZIA&oh=00_AfFEoVeMlCxzt2nMK3MbiuU_nNiPoIOLlswRWh1PyKvEpQ&oe=680EA506",
    map_link: "",
    description: ``,
  },
  {
    id: 228,
    name: `مدرسة سمنود الصناعية بنين
`,
    address: `شارع المدارس، سمنود، الغربية.

  `,
    governorate: "الغربية",
    specialization: [
      `
     `,
    ],
    phone: "",
    website: "https://www.facebook.com/smnud.sc.bo/?locale=ar_AR",
    image_url:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-1/360101102_656117879878742_5488349172606359831_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=nyeF0vowoGQQ7kNvwFPJ8DA&_nc_oc=Adn6IWj7eRSSgpCcZk5GdZPNAHmy4G61v2EPP8qGFQmMvKHLESHUusBEoB1a6eo96-0&_nc_zt=24&_nc_ht=scontent.fcai20-1.fna&_nc_gid=T3m_0KXW9aGINooGyFJD0A&oh=00_AfFwFFOa60tFUgGx7-YbC9X7hAn-W8_0xi4pXPVgHG7o_w&oe=680ED56C",
    map_link: "",
    description: ``,
  },
];

export default schools;
