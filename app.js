// ================= INITIAL STATE & DATA TEMPLATES =================

// Passcode for Training Coordinator access
const COORDINATOR_PASSCODE = "2010";

// Initial mock data to populate localStorage if empty
const INITIAL_INSTRUCTORS = [
    { id: "inst-1", name: "דסי לוריא", phone: "0547993209", specialty: "הנשמה מתקדמת, טיפול נשימתי", historyCount: 5, monthlyCounts: { "2026-05": 3, "2026-06": 2 } },
    { id: "inst-2", name: "שרה אוזן", phone: "0555505252", specialty: "קווי עורק, ניטור המודינמי", historyCount: 3, monthlyCounts: { "2026-05": 1, "2026-06": 2 } },
    { id: "inst-3", name: "יונת נקי", phone: "0587685094", specialty: "טיפול בטראומה מורכבת ונוירוכירורגיה", historyCount: 7, monthlyCounts: { "2026-05": 4, "2026-06": 3 } },
    { id: "inst-4", name: "רואן מחאג'נה", phone: "0526619820", specialty: "ניהול פרמקולוגי ותרופות טיפול נמרץ", historyCount: 2, monthlyCounts: { "2026-05": 1, "2026-06": 1 } },
    { id: "inst-5", name: "חיה גולן", phone: "0548416959", specialty: "קליטת צוות צעיר, תקשורת במצבי לחץ", historyCount: 4, monthlyCounts: { "2026-05": 2, "2026-06": 2 } },
    { id: "inst-6", name: "זהבית שלהבי", phone: "052-4249285", specialty: "הדרכת על-בסיסי וסטודנטים", historyCount: 3, monthlyCounts: { "2026-05": 2, "2026-06": 1 } },
    { id: "inst-7", name: "הודיה אוזן", phone: "054-8525515", specialty: "נהלי בטיחות ומניעת זיהומים", historyCount: 2, monthlyCounts: { "2026-05": 1, "2026-06": 1 } },
    { id: "inst-8", name: "שרה סיני", phone: "052-4713830", specialty: "ניטור המודינמי מתקדם ואקמו", historyCount: 4, monthlyCounts: { "2026-05": 3, "2026-06": 1 } },
    { id: "inst-9", name: "רבקה אליה", phone: "0543056038", specialty: "מרכזת הדרכה ומדריכה קלינית", historyCount: 4, monthlyCounts: { "2026-05": 2, "2026-06": 2 } }
];

// Force migrate local storage to overwrite old mock instructors list with the new real list
if (localStorage.getItem("icu_instructors_migrated_v4") !== "true") {
    localStorage.setItem("icu_instructors", JSON.stringify(INITIAL_INSTRUCTORS));
    localStorage.setItem("icu_instructors_migrated_v4", "true");
}

const INITIAL_PROTOCOLS = [
    // Nurse Category
    { id: "prot-1", title: "סילבוס קליטת אחות חדשה בטיפול נמרץ", category: "nurse", desc: "תוכנית הדרכה מלאה בת 12 שבועות לקליטת אחיות חדשות במחלקה, כולל שלבי הערכה שבועיים.", url: "file:///K:/ICU-Protocols/onboarding_syllabus.pdf" },
    { id: "prot-2", title: "נוהל הכנה והפעלה של מכונת הנשמה PB980", category: "nurse", desc: "סדר הפעולות לכיול ראשוני (SST), הגדרת פרמטרים בסיסיים וחיבור למטופל.", url: "file:///K:/ICU-Protocols/ventilator_PB980.pdf" },
    { id: "prot-3", title: "פרוטוקול טיפול ושמירה על קו עורקי (Arterial Line)", category: "nurse", desc: "שלבי שאיבת דם, כיול גובה הטרנסדוסר (Phlebostatic Axis) ומניעת זיהומים.", url: "file:///K:/ICU-Protocols/arterial_line_care.pdf" },
    
    // Advanced Category
    { id: "prot-4", title: "פרוטוקול תמיכה חוץ-גופית בחיים (ECMO)", category: "advanced", desc: "מדריך לניטור חולה על אקמו - מעקב זרימות, לחצים קניאלים ופרוטוקול הפעלה במקרה חירום.", url: "file:///K:/ICU-Protocols/ecmo_guide.pdf" },
    { id: "prot-5", title: "ניהול מנשם במצב ARDS קשה - גיוס ריאתי", category: "advanced", desc: "פרוטוקול הגדרה של PEEP גבוה, תנוחת שכיבה על הבטן (Prone Position) ומדדי מעקב.", url: "file:///K:/ICU-Protocols/ards_prone_protocol.pdf" },
    
    // Intern Category
    { id: "prot-6", title: "סילבוס סטאז' בטיפול נמרץ - מתווה 6 שבועות", category: "intern", desc: "תוכנית למידה ממוקדת לסטאז'רים לסיעוד כולל הגדרת סמכויות מותרות בפיקוח מדריך.", url: "file:///K:/ICU-Protocols/internship_6weeks.pdf" },
    
    // Student Category
    { id: "prot-7", title: "מתווה התנסות קלינית קצרה (שבועיים)", category: "student", desc: "דגשים לימי למידה מרוכזים לסטודנטים שנה ג' - היכרות עם סביבת החולה הקריטי.", url: "file:///K:/ICU-Protocols/student_2weeks_syllabus.pdf" },
    
    // General Category
    { id: "prot-8", title: "פרוטוקול ניהול עגלת החייאה וציוד החייאה", category: "general", desc: "נוהל בדיקה יומית, ספירת תרופות נעולות וסדר פעולות החלפה לאחר החייאה.", url: "file:///K:/ICU-Protocols/crash_cart_daily_check.pdf" }
];

// Checklists Templates for each track
const CHECKLIST_TEMPLATES = {
    nurse: {
        "אוריינטציה לאחות חדשה (שבוע 1 - חצי שנה)": [
            {
                id: "nurse-orient-1",
                title: "1. אוריינטציה לאחות חדשה",
                desc: "שיחת הכרות קלילה, שתבדוק: רמת ידע עדכני, תוכניות לעתיד לאחות בתחום המקצועי, שיכלול תאום ציפיות, ״אני מאמין״ של המחלקה, הצגת תהליך החניכה והקליטה.\n• אחריות ביצוע: א.אחראית / א.סגנית\n• עיתוי: ביום הראשון לקליטה"
            },
            {
                id: "nurse-orient-2",
                title: "2. הכרות עם צוות רב מקצועי",
                desc: "הצגת הסגל הרפואי, סיעודי, ומקצועות בריאות נוספים של המחלקה (בהמשך הכרות כלל בית חולים).\n• אחריות ביצוע: א.אחראית / א. חונכת\n• עיתוי: ביום הראשון ובהמשך הקליטה"
            },
            {
                id: "nurse-orient-3",
                title: "3. הכרת המבנה הפיזי של המחלקה",
                desc: "האחות החונכת תערוך סיור להכרת מבנה המחלקה לרבות: ציוד כיבוי אש, מקום המצאות חשמל/גזים רפואיים חיוניים, יציאת חירום, עמדת מטופל (code blue), עגלת החייאה, חדר תרופות, ארון ציוד העברת מטופל וכו'.\n• אחריות ביצוע: א.חונכת\n• עיתוי: ביום הראשון ובהמשך הקליטה"
            },
            {
                id: "nurse-orient-4",
                title: "4. הכרות עם נהלים ופרוטוקולים מחלקתיים ושל בית החולים",
                desc: "הצגת המודל הארגוני של העבודה במחלקה הכולל: שעות עבודה, דיווח על איחורים/היעדרויות, השתתפות בישיבות צוות, כניסה למנהל חולים, שימוש בקרדקס רפואי.\nהצגת הפרוטוקולים תרופתיים במחשב/קלסר גיבוי, הכרות עם אתר הבית ונהלים, חשיבות ביצוע לומדות (מתן דם וכו').\n• אחריות ביצוע: א. חונכת\n• עיתוי: הצגה בשבוע הראשון, יש לבצע עד חודש מההכשרה (לבדוק שנעשה!)"
            },
            {
                id: "nurse-orient-5",
                title: "5. פרופיל מחלקתי",
                desc: "הצגת אופי המטופלים המתאשפזים ביחידה מורכבותם, שיטות הטיפול, שיטת העבודה המחלקתית, מערכות התקשורת ויחסי הגומלין בין המחלקות (צוותים פרא רפואיים).\n• אחריות ביצוע: א. חונכת\n• עיתוי: ביום הראשון"
            },
            {
                id: "nurse-orient-6",
                title: "6. הכרת יחידות טיפול נבחרות",
                desc: "סיור במחלקות/ יחידות האשפוז עם האחות החונכת, חשיפה לפעילויות (מילוי דף מיומנויות).\n• אחריות ביצוע: א. חונכת\n• עיתוי: במהלך השבועיים הראשונים"
            },
            {
                id: "nurse-orient-7",
                title: "7. התמצאות בסביבת העבודה",
                desc: "הכרת הציוד במחלקה: מיקומו ודרכי הפעלתו.\nהכרת היחידות השונות המספקות ציוד וחומרי עזר: אספקה סטרילית, בית מרקחת, ציוד סטרילי/ משקי (אפסנאות), מכבסה, משק (ניקיון סביבת המטופל), פיזיותרפיה.\nקבלת ציוד מונפק, בדיקת כמויות, איכות, תאריכי תפוגה, ארגון וסידור הציוד במקום המתאים (כמו: תרופות וכו').\n• אחריות ביצוע: א. חונכת\n• עיתוי: במשך כל תקופת הקליטה"
            },
            {
                id: "nurse-orient-8",
                title: "8. הכרת שיטות עבודה רישום ודיווח",
                desc: "הכרות עם הרשומות, שיטת רישום ודיווח של צוות סיעודי, רפואי, פרא רפואי.\n• אחריות ביצוע: א.חונכת / אחות שמונתה על ידה.\n• עיתוי: במהלך כל תקופת הקליטה"
            },
            {
                id: "nurse-orient-9",
                title: "9. הכרת שיטות העבודה ויישומן",
                desc: "הכרת שגרת העבודה במחלקה (בתקופת החניכה משמרת בוקר וערב).\nתעבור מבדק פרמקולוגי בעת הכנת התרופות (מבחן תרופות לאחר סיום תקופת ההכשרה).\nיישום נהלי בית החולים ונהלי המחלקה.\nאומדן מצב המטופלים, בניית תוכנית טיפול לקידום המטופל, ביצוע והערכה.\nקביעת סדרי עדיפויות, הכרת תהליכי קבלת החלטות ופתרון בעיות, הכרת שותפי התפקיד ויצירת תקשורת מולם (דיווח לאחראית משמרת).\nתתפקד כאיש צוות במשמרות השונות (בתקופת החניכה בוקר/ ערב).\n• אחריות ביצוע: א אחראית / א חונכת\n• עיתוי: עד 6 חודשים"
            },
            {
                id: "nurse-orient-10",
                title: "10. הערכת תהליך הקליטה",
                desc: "הערכה מעצבת של תהליך הקליטה בנושאים:\n* מידת התמצאות והשתלבות במחלקה ובנהליה\n* הכרת המודל הארגוני של המחלקה\n* ביצוע פעולות סיעודיות\n* רישום ודיווח ברשומות\n* יצירת קשר עם עמיתים למקצוע, עם אנשים צוות רב מקצועיים, מטופלים ומשפחותיהם\n* יכולת קבלת ההנחיה וההדרכה כתהליך בונה\n* בירור ציפיות האחות להמשך ההתפתחות המקצועית\n* תיעוד הערכה מעצבת\n• אחריות ביצוע: א אחראית + א חונכת\n• עיתוי: אחרי חודש, אחרי 3 חודשים, בתום 6 חודשים."
            }
        ],
        "נושאים ונהלים (שבוע 1 - חודש 1)": [
            { id: "nurse-1", title: "1. סודיות רפואית", desc: "שמירה על סודיות רפואית ופרטיות המטופלים." },
            { id: "nurse-2", title: "2. זיהוי מטופל", desc: "מזהה ומציגה את המטופל ע״פ הנוהל המוסדי." },
            { id: "nurse-3", title: "3. ענידת יידון", desc: "ענידת יידון/צמיד תואם למטופל ע״פ הנוהל." },
            { id: "nurse-4", title: "4. תיעוד סיעודי", desc: "תיעוד כל העשייה הסיעודית ברשומות לפי מקומם המתאים." },
            { id: "nurse-5", title: "5. קוד לבוש", desc: "לבישת מדים מתאימים עם תג זיהוי במקום בולט." },
            { id: "nurse-6", title: "6. שמות זהים במחלקה", desc: "הנחיות במקרה של מטופלים בעלי שם זהה במחלקה." },
            { id: "nurse-7", title: "7. שימוש ברשומה רפואית", desc: "הכרות והכוונת שימוש עם הרשומה הרפואית - מנהל החולים, קרדקס התרופות." },
            { id: "nurse-8", title: "8. לקיחת בדיקות ומעבדה", desc: "הכרות עם טפסי לקיחת בדיקות ואופן שליחתם במערכת ״הטיל״, שימוש במכשיר הגזים." },
            { id: "nurse-9", title: "9. הכרת מבנה פיזי", desc: "הכרות מבנה המחלקה והחדרים השונים: מחסן קדמי, מחסן אחורי, חדר ציוד רפואי, חדר גזים רפואיים, אספקת כביסה. עגלת החייאה, ציוד להעברת מטופל." },
            { id: "nurse-10", title: "10. חדר תרופות", desc: "הכרות עם חדר התרופות: מיקום נוזלים, תרופות, ציוד, הכנת AL TPN, רישום ואופן הוצאת טוקסיקה, רישום בקרה על חדר התקופות." },
            { id: "nurse-11", title: "11. מבדק ידע בתרופות", desc: "מבדק ידע מחלקתי בתרופות (*בסיום ההכשרה)." },
            { id: "nurse-12", title: "12. לומדות ומחשב", desc: "הכרות עם מערכת me teach לביצוע לומדות: מתן דם, זיהומים, חשבון רוקחי, צנתרים וכו'. הכרות עם אתר הבית, וקריאת נהלים מחלקתיים ומוסדיים. הכרות עם קלסר/ תיקיית מחשב פרוטוקולים מחלקתיים." },
            { id: "nurse-13", title: "13. יחידת המטופל", desc: "הכרות עם יחידת המטופל: תפעול המיטה, אזור רטוב (הכנה וחיבור של תרופות, שימוש במאריכים וכו') אזור יבש (מנשם, גרביים פנאומטיות, מכשיר חימום, מד סוכר, מחשב וכו')." },
            { id: "nurse-14", title: "14. מצבי חירום ואר״ן", desc: "התנהלות במצבי חירום / אר״ן: הכרות של האזורים המוגנים, מצבי שריפה ופינוי מטופלים, מצב מלחמה ופתיחת אתר השהייה לפינוי." }
        ],
        "מיומנויות מקצועיות כלליות (3-6 חודשים)": [
            { id: "nurse-15", title: "15. תכנון עבודה", desc: "הכרת סדר היום, תכנון ע״פ סד״פ." },
            { id: "nurse-16", title: "16. קבלת מטופל", desc: "קבלת מטופל כולל ביצוע קבלה סיעודית במחשב." },
            { id: "nurse-17", title: "17. הכנת יחידת המטופל לקבלה", desc: "הכנת יחידת המטופל לקבלה לאחר קבלת נתונים ראשוניים אודות מצבו (קו עורקי, תרופות ואזופרסוריות)." },
            { id: "nurse-18", title: "18. עמדת המטופל ותפעול מוניטור", desc: "הכרות עם עמדת המטופל, תפעול מוניטור וקביעת התראות, ציוד נדרש וציוד מתקלה הכרחי בעמדה." },
            { id: "nurse-19", title: "19. נוהל טיפול בחפצי ערך", desc: "נוהל טיפול בחפצי ערך של המטופל." },
            { id: "nurse-20", title: "20. נוהל טיפול בהיעלמות מטופל", desc: "נוהל טיפול בהעלמות מטופל." },
            { id: "nurse-21", title: "21. ביצוע אומדנים ודיווח", desc: "ביצוע אומדנים ודיווח ברשומות." },
            { id: "nurse-22", title: "22. שליחה לפעולה פולשנית", desc: "שליחת מטופל לפעולה פולשנית (מילוי צ׳ק ליסט)." },
            { id: "nurse-23", title: "23. קבלה ומעקב אחר פעולה", desc: "קבלה ומעקב מטופל אחר פעולה פולשנית." },
            { id: "nurse-24", title: "24. הכנה ושליחה לחדר ניתוח/CT", desc: "הכנה ושליחת מטופל לחדר ניתוח/ct." },
            { id: "nurse-25", title: "25. קבלה ומעקב לאחר ניתוח", desc: "קבלה ומעקב המטופל לאחר חזרתו מחדר ניתוח." },
            { id: "nurse-26", title: "26. אומדן וטיפול בפצע ניתוח", desc: "אומדן ומעקב, טיפול בפצע ניתוח." },
            { id: "nurse-27", title: "27. זיהוי ערכים לא תקינים", desc: "זיהוי ערכים לא תקינים בבדיקות דם ותפעול בהתאם." },
            { id: "nurse-28", title: "28. טיפול ב-VAC", desc: "הכרת חיבור ומעקב אחרי מטופלים עם vac." },
            { id: "nurse-29", title: "29. מעקב אחר נקזים", desc: "הכרות ומעקב אחר מטופל עם נקזים: תוכן ומוצא הנקז. למשל: ג׳קסון, דריין טורקלי, ptcd, נפרוסטום וכו'." },
            { id: "nurse-30", title: "30. הוצאת סיכות/תפרים", desc: "הוצאת סיכות/תפרים לפי בקשה רפואית, ארון סטרלי (עמדת רופאים)." },
            { id: "nurse-31", title: "31. הגבלה פיזית במטופלים", desc: "טיפול ומעקב אחרי הגבלה פיזית במטופלים." },
            { id: "nurse-32", title: "32. טיפול בנפטר", desc: "טיפול בנפטר ע״פ נוהל מוסדי (הוצאת צנתרים/מדבקות וכו')." },
            { id: "nurse-33", title: "33. מניעת זיהומים", desc: "• הכרות עם כללי התמגנות מחלקתיים וסיקור מטופלים המתאשפזים ביחידה\n• 5 הרגעים, היגיינת ידיים, הכנת תרופות וכו׳\n• הכרות עם אמצעי הבידוד שגרתיים\n• הכרת תהליך הבידוד בחדר לחץ שלילי ביחידה והכרות הפעלה של החדר\n• טיפול במטופלים עם בידוד טיפתי / מגע / אווירני / הגנתי\n• מניעת אירוע דקירה מחפצים חדים והתערבות ע״פ הנוהל\n• דיווח על צנתרים (קתטר שתן, cvc וכו׳)" },
            { id: "nurse-34", title: "34. מניעה וטיפול בכאב", desc: "• אומדן כאב והכרת השימוש בסרגלי כאב במחלקה bps וכו׳\n• הכרת פרוטוקולים לטיפול בכאב\n• הכרת טכניקות לטיפול בכאב IV PCA / EPIDURAL\n• מתן טיפול הולם ומעקב" },
            { id: "nurse-35", title: "35. טיפול במטופל סוכרתי", desc: "• הכרת פרוטוקול טיפולי באינסולין (מעקב/פרוטוקול), DKA וכו׳\n• טיפול במטופל עם היפוגליקמיה\n• סוגי אינסולין בשימוש במחלקה\n• הזמנת כלכלה מתאימה למטופל סוכרתי בייעוץ דיאטנית" },
            { id: "nurse-36", title: "36. טיפול במטופל עם פצעים", desc: "• הכרת נוהל הטיפול בפצע לחץ\n• זיהוי גורמי סיכון לפצעי לחץ (נורטון, אלבומין ..)\n• הדרכת המטופל ומשפחתו למניעת פצעי לחץ\n• הכרת סיווג פצעים וטיפול ע״פ דרגתם\n• הכרה והפעלת מזרנים למניעת פצעי לחץ\n• הכרת התכשירים הקיימים במחלקה\n• דיווח ברשומה על פצעי לחץ והתייעצות עם אחות פצעים" },
            { id: "nurse-37", title: "37. טיפול סיעודי במטופל מורכב", desc: "• הכרת שיטות עבודה מקובלות (שיטת הפקדה)\n• טיפול פה + צחצוח סיעודי, טיפול בפצעים\n• החלפת וטיפול בשרוך וגאזות מהטובוס/שימוש ברסן/טרכיאוסטום לפי שיקול דעת\n• ביצוע שינויי תנוחה, רחצה יבשה, חבישת לחץ מניעתית בעכוז\n• מעקב אחר יציאות ושימוש בחוקן, הוצאת אבני צואה כפעולת סיעוד" },
            { id: "nurse-38", title: "38. טיפול נשימתי במונשם", desc: "• הכרת אומדן נשימתי (נשימות, אומדן הפרשות, כיחלון)\n• הכרת האמצעים השונים למתן חמצן (high flow), שימוש בבלון חמצן\n• זיהוי הצורך בביצוע שאיבת הפרשות + העשרה בחמצן לפני (ביצוע סקשן סגור/פתוח עם כפפה סטרילית)\n• שימוש באמבו ידני, לקיחת דגימות ממערכת סקשן סגורה/lavage, ניטור ומעקב\n• טיפול במטופל עם פיום קנה ותשקול מעבר למסיכה טרכיאלית לפי צורך\n• הכרת סיבות להנשמה מלאכותית, שיטות הנשמה ואינדיקציות, סיבוכים והתערבות בהתאם\n• אינטובציה: הכנת הציוד, הדרכת המטופל וסיוע לרופא\n• נוהל גמילה מהנשמה, אקסטובציה: הכנת הציוד וסיוע לרופא" },
            { id: "nurse-39", title: "39. טיפול בצנתר מרכזי", desc: "• הכרות עם נוהל מניעת זיהומים וצנתרים, ביצוע סימולציה לטיפול בצנתר מרכזי\n• הכנת הציוד וסיוע בהכנסת צנתר cvc למטופל עם רופא, תוך שמירה על הנהלים\n• מעקב צנתר והחלפת חבישה לפי הצורך, הכרת סיבוכי צנתרים מרכזיים CVC\n• הוצאת צנתר מרכזי ושליחת קצה לתרבית, עדכון צנתרים חדשים/מעקב צנתר קיים במחשב\n• לקיחת דמים מקו עורקי (סימולציה) הרשאה חריגה, הכנת הסט/ציוד להכנסת AL\n• הוצאת קו עורקי לאחות עם קורס על-בסיסי\n• טיפול בנקזים השונים (ג׳קסון, דריין טורקלי, ptcd, נפרוסטום וכו') ורישום כמות הפרשות, זיהוי סיבוכים, לקיחת דגימות לבדיקות\n• ביצוע מאזן נוזלים daily in/out put בסוף משמרת לילה" },
            { id: "nurse-40", title: "40. טיפול בזונדה/סטומה", desc: "• הכרות עם נוהל הכנסת זונדה + ביצוע החדרה + קיבוע + וידוא מיקום\n• זיהוי סיבוכים למונשם, התוויות נגד (טראומת ראש) הכנסה דרך הפה\n• מתן הזנה דרך הזונדה + רישום ודיווח על השקית וברשומה\n• טיפול בגסטרוסטום + שטיפה, מתן תרופות וידוא מיקום ושטיפה לאחריה\n• טיפול במטופל עם סטומה/אילאוסטום, מעקב ואומדן המעי כולל החלפת שקית/קיבוע לפי הצורך, דיווח על הצורך בהשלמת הזמנת ציוד לסטומה" },
            { id: "nurse-41", title: "41. הזנה תוך ורידית", desc: "• הכרת נוהל מתן ppn/tpn + אינסולין iv\n• הכנתו ע״פ עקרונות הנוהל בחדר התרופות ובסמוך למטופל (טכניקת החיבור)\n• הכרות עם סוגי התמיסות לרבות מעקב טריגליצרידים וסוכר" },
            { id: "nurse-42", title: "42. טיפול בצנתר למערכת השתן (קטטר)", desc: "• הכנסת קטטר ע״פ עקרונות, מעקב אחרי הסיבוכים, לקיחת דגימות, הוצאת הצנתר, עדכון ודיווח במחשב\n• מעקב אחר תפוקת שתן שעתית ומענה הולם (שטיפת קטטר/נוזלים/משתנים), הכרות עם תמיסה לשטיפת קטטר - מטופל אורולוגי" },
            { id: "nurse-43", title: "43. ניהול הטיפול", desc: "• וידוא הזמנת ייעוצים למטופל: רנטגן, דיאטנית, עו״סית, פיזיותרפיה" },
            { id: "nurse-44", title: "44. רישום ודיווח ברשומות", desc: "• כתיבת דיווח סיעודי מלא, איסוף נתונים המקובל במחלקה, עדכון צנתרים אומדנים\n• העברת מידע/מסירת משמרת לפי מודל isbar, דיווח על קבלת תשובה חריגה readback, תכנים לדיווח ועדכון הרופא התורן\n• ביצוע שחרור סיעודי למטופל, מילוי טופס העברה לבית חולים אחר, דיווח על אירוע חריג / כמעט אירוע + לומדת ניהול סיכונים" },
            { id: "nurse-45", title: "45. ביצוע הדרכות למטופל", desc: "• הכרות עם נושאי ההדרכה ביחידה (אוריינטציה במחלקה, כאב, נפילות, טיפול תרופתי חדש, הכרת שירותי תרגום, פיום קנה)" },
            { id: "nurse-46", title: "46. הכרת הציוד והפעלת מכשור רפואי", desc: "• מוניטור/דפיברילטור, משאבות נפחיות qcore/mindray, מכשירי vac\n• מכשיר פריזמה - סיוע בהכנת ציוד להפעלת פריזמה וחיבורה ע״י אחות/רופא שעברו הכשרה. תפעול לפי הוראות\n• ציוד לנקז חזה + מים סטריליים, מכשיר high flow / airvo, בלון no helium\n• מכשיר ומסיכה ל-cpap / bipap, מכשיר ברונכוסקופיה, מכשיר אולטראסאונד, מכשיר אק״ג\n• מכשיר גליידוסקופ (לאינטובציה קשה), מכשיר/מודול ל-picco, מכשיר אולטרסוניק (INH) / argon\n• מכשיר אנקונדה (issofloran), מכשיר חימום, מכשיר גרביים פנאומטיות + האינדיקציות, מכשיר גלוקומטר + סטיקים לקטונים\n• אינטרקום, code blue + ביטול קריאה, לחצן קריאה לאחות + ביטול קריאה\n• עגלות (טיפולים, פרוצדורות, דמים), מכשיר חימום למגבונים, לחצן מצוקה - לביטחון" }
        ],
        "מיומנויות ייחודיות (אחרי 6 חודשים)": [
            { id: "nurse-47", title: "47. נהלי הנשמה", desc: "הכרת/חזרה על נהלים הקשורים לטיפול החולה המונשם." },
            { id: "nurse-48", title: "48. מכונת הנשמה", desc: "הכרות עם מכונת ההנשמה (הבנה של התראות במנשם ודרך לתקן אותם) וחיבוריה לקווי האספקה." },
            { id: "nurse-49", title: "49. יעילות הנשמה", desc: "הכרת פרמטרים ושיטות ההנשמה והתאמתם למטופל, הערכת ייעול ההנשמה." },
            { id: "nurse-50", title: "50. ציוד נלווה למונשם", desc: "הכרת הציוד הנלווה והנדרש למטופל מונשם (מערכת סקשן סגורה, vap, etco2)." },
            { id: "nurse-51", title: "51. גזים ייעודיים", desc: "הכרות עם גזים ייעודים ביחיידה (no, הליום)." }
        ],
        "הכרות תרופות במחלקה (עד 3 חודשים)": [
            { id: "nurse-52", title: "52. מתן בדחף", desc: "הכרות עם נוהל מתן תרופות ״בדחף״." },
            { id: "nurse-53", title: "53. ידע פרמקולוגי", desc: "ידע בתרופות: התוויות, התוויות נגד, הלימה בטיפול תרופתי חדש, מינונים, צורת מתן, מיהול, פרמקוקנטיקה, תופעות לוואי שכיחות ומסוכנות." },
            { id: "nurse-54", title: "54. נהלי מתן והסבר", desc: "מתן תרופות ע״פ נוהל הטיפול התרופתי, תרופות otc, כולל הדרכה למטופלים בהכרה ולמשפחותיהם." },
            { id: "nurse-55", title: "55. מתן דם ומוצריו", desc: "מתן דם ומוצריו ע״פ נוהל מב״ר (הכרות עם נוהל מתן דם ע״י 2 אחיות) + לקיחת סוג להצלבה/cross." },
            { id: "nurse-56", title: "56. תרופות בנות סיכון", desc: "הכרת רשימת תרופות בנות סיכון במחלקה." },
            { id: "nurse-57", title: "57. סמים וטוקסיקה", desc: "סמים מסוכנים/ טוקסיקה: מתן, ספירה, ניהול מלאי. הכרות עם הנוהל." },
            { id: "nurse-58", title: "58. מבחן תרופות", desc: "מבחן תרופות מחלקתי ומעבר לעצמאות בהכנת התרופות בסיום הקליטה ולפי הוראת אחות אחראית המחלקה." }
        ],
        "החייאה במחלקה (עד 6 חודשים)": [
            { id: "nurse-59", title: "59. ציוד החייאה", desc: "ביצוע עגלת החייאה+ דפיברילטור+ אמבו, חמצן+ תרופות וציוד נלווה." },
            { id: "nurse-60", title: "60. הכרת עגלה", desc: "הכרת הציוד בעגלת ההחייאה." },
            { id: "nurse-61", title: "61. חיבור אמבו", desc: "מיומנות חיבור אמבו לחמצן." },
            { id: "nurse-62", title: "62. הפעלת ציוד נייד", desc: "הכרה והפעלת מוניטור ודפיברילטור (נייד)." },
            { id: "nurse-63", title: "63. סדר פעולות", desc: "הכרת סדר פעולות בעת ביצוע החייאה." },
            { id: "nurse-64", title: "64. ניטור החייאה", desc: "מילוי טופס ניתור החייאה." },
            { id: "nurse-65", title: "65. תרגול ועקרונות CAB", desc: "השתתפות בביצוע החייאה+ עקרונות CAB." },
            { id: "nurse-66", title: "66. העברת חולה מורכב", desc: "הכרת ציוד העברה לחולה מורכב/מונשם." },
            { id: "nurse-67", title: "67. קורס ACLS", desc: "הכשרה ACLS, ע״י המרכז להדרכה בבי״ח." }
        ],
        "נושאים כלליים ומחייבים": [
            { id: "nurse-68", title: "68. נוהל קליטה ונספחים", desc: "הכרות עם נוהל קליטת אחות+ נספחים+משוב." },
            { id: "nurse-69", title: "69. מדדי איכות", desc: "הכרת מדדי איכות מחלקתיים." }
        ]
    },
    advanced: {
        "נושאי ליבה על-בסיסי": [
            { id: "adv-1", title: "ניטור המודינמי מתקדם", desc: "הבנת מדדי Swan-Ganz, תפוקת לב (CO), התנגדות כלי דם (SVR), ושימוש ב-FloTrac." },
            { id: "adv-2", title: "טיפול תחליפי כלייתי רציף (CRRD / Prismaflex)", desc: "הרכבת סט פילטר, כיול המכשיר, הגדרת זרימות וטיפול בסתימת פילטר/קרישה." },
            { id: "adv-3", title: "עקרונות תמיכת ECMO במחלקה", desc: "מעקב זרימות, ניטור נוגדי קרישה (ACT/APTT), תגובה במקרה של ניתוק או כשל במשאבה." }
        ],
        "רובריקות חובה השתלמות": [
            { id: "adv-req-1", title: "חוזה הדרכה", desc: "תיאום ציפיות וחתימה על חוזה הדרכה קלינית מול המדריכה." },
            { id: "adv-req-2", title: "יום ראשון להשתלמות - אוריינטציה", desc: "היכרות עם מבנה המחלקה, נהלי בטיחות ורמות ניטור גבוהות." },
            { id: "adv-req-3", title: "הערכת אמצע", desc: "שיחת משוב חצי-תקופתית על קצב ההתקדמות ומיומנויות מתקדמות." },
            { id: "adv-req-4", title: "דיון קליני / מטלת סיום השתלמות", desc: "הצגת מקרה מורכב או השתתפות בדיון קליני מתקדם." },
            { id: "adv-req-5", title: "הערכת סיום ההשתלמות", desc: "שיחת משוב מסכמת וחתימה על דוח הערכה דיגיטלי במערכת." }
        ]
    },
    intern: {
        "דגשי סטאז' בטיפול נמרץ": [
            { id: "intern-1", title: "ניהול וניטור סימנים חיוניים", desc: "חיבור מוניטור, הגדרת גבולות אזעקה והבנת עקומות אק\"ג, סטורציה ולחץ דם פולשני." },
            { id: "intern-2", title: "הכנת סביבת המטופל הקריטי", desc: "בדיקת תקינות מערכות שאיבה (סקשיין), מיכל חמצן, ערכת החייאה ומנשם במצב Standby." },
            { id: "intern-3", title: "תרגול דיווח והצגת מקרה בסבב", desc: "למידה והצגת חולה מורכב לפי שיטת מערכות גוף (נוירולוגי, נשימתי, קרדיווסקולרי, כליות)." }
        ],
        "רובריקות חובה סטאז'": [
            { id: "intern-req-1", title: "חוזה הדרכה", desc: "תיאום ציפיות וחתימה על חוזה הדרכה קלינית מול המדריכה." },
            { id: "intern-req-2", title: "יום ראשון לסטאז' - אוריינטציה", desc: "היכרות עם מבנה המחלקה, צוות, נהלי בטיחות ויחידת המטופל." },
            { id: "intern-req-3", title: "הערכת אמצע", desc: "שיחת משוב חצי-תקופתית על קצב הקליטה והתקדמות המיומנויות." },
            { id: "intern-req-4", title: "דיון קליני / מטלת סיום סטאז'", desc: "הצגת מקרה חולה או מטלה קלינית מסכמת מול הצוות." },
            { id: "intern-req-5", title: "הערכת סיום הסטאז'", desc: "שיחת משוב מסכמת וחתימה על דוח הערכה דיגיטלי במערכת." }
        ]
    },
    student: {
        "התנסות קלינית קצרה": [
            { id: "stud-1", title: "היכרות עם סביבת טיפול נמרץ", desc: "הבנת ההבדל בין מחלקה רגילה לטיפול נמרץ, מעורבות הצוות הרב-מקצועי ושמירה על פרטיות המטופל." },
            { id: "stud-2", title: "עזרה בסיסית בטיפול סיעודי בחולה מורדם ומונשם", desc: "תרגול רחצה, טיפול פה למניעת דלקת ריאות (VAP), שינוי תנוחות ומניעת פצעי לחץ." },
            { id: "stud-3", title: "מעקב ומדידות בסיסיות", desc: "ספירת מאזן נוזלים, קריאת מדידת שתן שעתית ומעקב הפרשות מנקזים." }
        ],
        "רובריקות חובה התנסות": [
            { id: "stud-req-1", title: "חוזה הדרכה", desc: "תיאום ציפיות וחתימה על חוזה הדרכה קלינית מול המדריכה." },
            { id: "stud-req-2", title: "יום ראשון להתנסות - אוריינטציה", desc: "היכרות עם מבנה המחלקה, נהלי בטיחות ויחידת המטופל." },
            { id: "stud-req-3", title: "הערכת אמצע", desc: "שיחת משוב חצי-תקופתית על קצב ההתקדמות בהתנסות." },
            { id: "stud-req-4", title: "מטלת סיום התנסות", desc: "הגשה או ביצוע של מטלת סיום התנסות קלינית." },
            { id: "stud-req-5", title: "הערכת סיום ההתנסות", desc: "שיחת משוב מסכמת וחתימה על דוח הערכה דיגיטלי במערכת." }
        ]
    }
};

const INITIAL_TRAINEES = [
    {
        id: "tr-1",
        name: "שירה כהן",
        track: "nurse",
        school: "הסבת אקדמאים - תל השומר",
        instructorId: "inst-1",
        startDate: "2026-05-01",
        checklist: {
            "nurse-orient-1": { checked: true, signoffDate: "2026-05-01", instructorName: "דסי לוריא" },
            "nurse-orient-2": { checked: true, signoffDate: "2026-05-01", instructorName: "דסי לוריא" },
            "nurse-orient-3": { checked: true, signoffDate: "2026-05-01", instructorName: "דסי לוריא" },
            "nurse-orient-5": { checked: true, signoffDate: "2026-05-01", instructorName: "דסי לוריא" },
            "nurse-1": { checked: true, signoffDate: "2026-05-02", instructorName: "דסי לוריא" },
            "nurse-2": { checked: true, signoffDate: "2026-05-02", instructorName: "דסי לוריא" },
            "nurse-3": { checked: true, signoffDate: "2026-05-05", instructorName: "דסי לוריא" },
            "nurse-4": { checked: true, signoffDate: "2026-05-08", instructorName: "דסי לוריא" },
            "nurse-5": { checked: true, signoffDate: "2026-05-10", instructorName: "דסי לוריא" }
        },
        evaluation: {
            attendance: "טוב מאוד",
            professional: "טוב מאוד",
            communication: "עולה על הציפיות",
            summary: "שירה משתלבת נהדר במחלקה. מראה קליטה מהירה של נהלים ולמידה רצינית. יש להתמקד בחודש הקרוב בהפעלה של מנשמים וניהול לחצי דם באופן עצמאי.",
            date: "2026-05-28"
        }
    },
    {
        id: "tr-2",
        name: "אלון מזרחי",
        track: "intern",
        school: "אוניברסיטת בן גוריון",
        instructorId: "inst-3",
        startDate: "2026-05-20",
        checklist: {
            "intern-1": { checked: true, signoffDate: "2026-05-22", instructorName: "יונת נקי" },
            "intern-2": { checked: true, signoffDate: "2026-05-25", instructorName: "יונת נקי" },
            "intern-3": { checked: false },
            "intern-req-1": { checked: true, signoffDate: "2026-05-20", instructorName: "יונת נקי" },
            "intern-req-2": { checked: true, signoffDate: "2026-05-20", instructorName: "יונת נקי" }
        },
        evaluation: null
    },
    {
        id: "tr-3",
        name: "מאיה לוי",
        track: "advanced",
        school: "על-בסיסי טיפול נמרץ - תל השומר",
        instructorId: "inst-2",
        startDate: "2026-04-15",
        checklist: {
            "adv-1": { checked: true, signoffDate: "2026-04-20", instructorName: "שרה אוזן" },
            "adv-2": { checked: false },
            "adv-3": { checked: false },
            "adv-req-1": { checked: true, signoffDate: "2026-04-15", instructorName: "שרה אוזן" }
        },
        evaluation: null
    }
];

// Force migrate local storage for trainees to update with the new 69-item structure and rubrics (v7 adds orientation checklist)
if (localStorage.getItem("icu_trainees_migrated_v7") !== "true") {
    localStorage.setItem("icu_trainees", JSON.stringify(INITIAL_TRAINEES));
    localStorage.setItem("icu_trainees_migrated_v7", "true");
}

// ================= GLOBAL STATE =================
let currentRole = "staff"; // 'staff' or 'coordinator'
let currentTab = "dashboard";
let currentNurseId = null;
let currentStudentId = null;
let selectedExperienceFilter = "all";
let currentChecklistCategory = "";

// Database stored in Memory, initialized from LocalStorage
let database = {
    instructors: [],
    trainees: [],
    protocols: []
};

// ================= APP INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
    // Load Database
    loadFromLocalStorage();
    
    // Set default date in modals
    const dateInput = document.getElementById("trainee-start-date");
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
    
    // Set default month for monthly report select
    const monthInput = document.getElementById("report-month-select");
    if (monthInput) {
        monthInput.value = new Date().toISOString().substring(0, 7); // YYYY-MM
    }
    
    // Render initial views
    renderAll();
    
    // Initialize default checklist category for active views
    setDefaultChecklistCategory();
});

// Load data from LocalStorage or initialize with defaults
function loadFromLocalStorage() {
    try {
        const storedInstructors = localStorage.getItem("icu_instructors");
        const storedTrainees = localStorage.getItem("icu_trainees");
        const storedProtocols = localStorage.getItem("icu_protocols");
        
        if (storedInstructors && storedTrainees && storedProtocols) {
            database.instructors = JSON.parse(storedInstructors);
            database.trainees = JSON.parse(storedTrainees);
            database.protocols = JSON.parse(storedProtocols);
            
            // If the loaded list doesn't contain the real instructor "רבקה אליה", populate with the real list
            const hasRebecca = database.instructors.some(inst => inst.name === "רבקה אליה");
            if (!hasRebecca) {
                database.instructors = [...INITIAL_INSTRUCTORS];
                saveToLocalStorage();
            } else {
                // Ensure backward compatibility
                database.instructors.forEach(inst => {
                    if (!inst.monthlyCounts) {
                        inst.monthlyCounts = {};
                    }
                    if (!inst.phone) {
                        inst.phone = "";
                    }
                });
            }
        } else {
            // Setup default data
            database.instructors = [...INITIAL_INSTRUCTORS];
            database.trainees = [...INITIAL_TRAINEES];
            database.protocols = [...INITIAL_PROTOCOLS];
            saveToLocalStorage();
        }
        
        // Load fortnightly placements
        const storedPlacements = localStorage.getItem("icu_fortnightly_placements");
        if (storedPlacements) {
            database.fortnightlyPlacements = JSON.parse(storedPlacements);
        } else {
            database.fortnightlyPlacements = [
                { id: "fn-1", startDate: "2026-06-01", endDate: "2026-06-14", groupName: "קבוצת מכללת מבחר", instructorId: "inst-1", status: "completed" },
                { id: "fn-2", startDate: "2026-06-15", endDate: "2026-06-28", groupName: "קבוצת אקדמית תל אביב", instructorId: "inst-3", status: "active" },
                { id: "fn-3", startDate: "2026-06-29", endDate: "2026-07-12", groupName: "קבוצת תל השומר - סבב ב'", instructorId: "inst-5", status: "scheduled" }
            ];
        }
        
        database.annualPlanUrl = localStorage.getItem("icu_annual_plan_url") || "";
        database.annualPlanName = localStorage.getItem("icu_annual_plan_name") || "";
        
    } catch (e) {
        console.error("שגיאה בטעינת נתונים מ-LocalStorage:", e);
        // Fallback to memory
        database.instructors = [...INITIAL_INSTRUCTORS];
        database.trainees = [...INITIAL_TRAINEES];
        database.protocols = [...INITIAL_PROTOCOLS];
        database.fortnightlyPlacements = [];
        database.annualPlanUrl = "";
        database.annualPlanName = "";
    }
}

// Save database state to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem("icu_instructors", JSON.stringify(database.instructors));
        localStorage.setItem("icu_trainees", JSON.stringify(database.trainees));
        localStorage.setItem("icu_protocols", JSON.stringify(database.protocols));
        localStorage.setItem("icu_fortnightly_placements", JSON.stringify(database.fortnightlyPlacements || []));
        localStorage.setItem("icu_annual_plan_url", database.annualPlanUrl || "");
        localStorage.setItem("icu_annual_plan_name", database.annualPlanName || "");
    } catch (e) {
        console.error("שגיאה בשמירת נתונים ל-LocalStorage:", e);
    }
}

// ================= RENDER CONTROL HUB =================
function renderAll() {
    renderDashboard();
    renderNurseSelector();
    renderExperienceSelector();
    renderActiveTraineeChecklist();
    renderInstructors();
    renderFortnightlyPlacements();
    renderProtocols();
    updateRoleVisibility();
}

// ================= ROLE & ACCESS CONTROL =================
function switchRole(role) {
    currentRole = role;
    
    // Update role toggle buttons
    const btnStaff = document.getElementById("btn-role-staff");
    const btnCoord = document.getElementById("btn-role-coordinator");
    
    if (role === "staff") {
        btnStaff.classList.add("active");
        btnCoord.classList.remove("active");
        
        // If we were on coordinator-only tab, switch back to dashboard
        if (currentTab === "instructors") {
            showTab("dashboard");
        }
    } else {
        btnStaff.classList.remove("active");
        btnCoord.classList.add("active");
    }
    
    updateRoleVisibility();
    renderAll(); // Re-render everything to update buttons and columns
}

// Prompt for coordinator passcode
function trySwitchToCoordinator() {
    if (currentRole === "coordinator") return;
    
    openModal("modal-passcode");
    document.getElementById("passcode-input").focus();
}

function verifyPasscode() {
    const input = document.getElementById("passcode-input");
    const errorMsg = document.getElementById("passcode-error");
    
    if (input.value === COORDINATOR_PASSCODE) {
        errorMsg.classList.add("hidden");
        input.value = "";
        closeModal("modal-passcode");
        switchRole("coordinator");
    } else {
        errorMsg.classList.remove("hidden");
        input.value = "";
        input.focus();
    }
}

// Show/Hide elements based on active role
function updateRoleVisibility() {
    const isCoordinator = (currentRole === "coordinator");
    
    // Coordinator-only elements
    const coordOnlyElements = document.querySelectorAll(".coordinator-only");
    coordOnlyElements.forEach(el => {
        if (isCoordinator) {
            el.classList.remove("hidden");
        } else {
            el.classList.add("hidden");
        }
    });
    
    // Coordinator-only sidebar tabs
    const coordNav = document.querySelectorAll(".coordinator-only-nav");
    coordNav.forEach(el => {
        if (isCoordinator) {
            el.classList.remove("hidden");
        } else {
            el.classList.add("hidden");
        }
    });
}

// ================= TAB NAVIGATION =================
function showTab(tabName) {
    // If trying to access instructors in staff mode, intercept
    if (tabName === "instructors" && currentRole !== "coordinator") {
        trySwitchToCoordinator();
        return;
    }
    
    currentTab = tabName;
    
    // Update active nav button
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        if (item.id === `tab-btn-${tabName}`) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    // Show active tab content
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        if (content.id === `tab-${tabName}`) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
    
    // Specific actions on tab change
    if (tabName === "onboarding" && currentNurseId === null && database.trainees.length > 0) {
        const firstNurse = database.trainees.find(t => t.track === "nurse");
        if (firstNurse) selectTrainee(firstNurse.id);
    }
    if (tabName === "experiences" && currentStudentId === null && database.trainees.length > 0) {
        const firstStudent = database.trainees.find(t => t.track !== "nurse");
        if (firstStudent) selectTrainee(firstStudent.id);
    }
    
    renderAll();
}

// ================= TAB 1: DASHBOARD LOGIC =================
function renderDashboard() {
    // Stats calculation
    const totalTrainees = database.trainees.length;
    document.getElementById("stat-total-trainees").innerText = totalTrainees;
    
    // Active Instructors (instructors currently assigned to an active trainee)
    const activeInstructorIds = new Set();
    database.trainees.forEach(t => {
        if (t.instructorId) activeInstructorIds.add(t.instructorId);
        if (t.instructorId2) activeInstructorIds.add(t.instructorId2);
    });
    document.getElementById("stat-active-instructors").innerText = activeInstructorIds.size;
    
    // Overall completion percentage
    let totalItems = 0;
    let checkedItems = 0;
    
    database.trainees.forEach(t => {
        const trackTemplate = CHECKLIST_TEMPLATES[t.track];
        if (!trackTemplate) return;
        
        // Count all template items
        Object.keys(trackTemplate).forEach(cat => {
            trackTemplate[cat].forEach(item => {
                totalItems++;
                if (t.checklist && t.checklist[item.id] && t.checklist[item.id].checked) {
                    checkedItems++;
                }
            });
        });
    });
    
    const avgProgress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    document.getElementById("stat-completed-skills").innerText = `${avgProgress}%`;
    
    // Track categories summary
    const countTrack = (track) => database.trainees.filter(t => t.track === track).length;
    document.getElementById("summary-track-new-nurse").innerText = `${countTrack("nurse")} אחיות בתהליך קליטה`;
    document.getElementById("summary-track-advanced").innerText = `${countTrack("advanced")} אחיות בהשתלמות`;
    document.getElementById("summary-track-intern").innerText = `${countTrack("intern")} סטודנטים`;
    document.getElementById("summary-track-student").innerText = `${countTrack("student")} סטודנטים`;
    
    // Trainees Table
    const tableBody = document.getElementById("dashboard-trainees-table-body");
    const emptyState = document.getElementById("dashboard-no-trainees");
    tableBody.innerHTML = "";
    
    if (totalTrainees === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }
    
    database.trainees.forEach(t => {
        const tr = document.createElement("tr");
        
        // Progress Calculation for this trainee
        const progress = calculateTraineeProgress(t);
        const instructor = database.instructors.find(i => i.id === t.instructorId);
        const instructor2 = t.instructorId2 ? database.instructors.find(i => i.id === t.instructorId2) : null;
        let instructorName = '<span class="text-orange">לא שובצה</span>';
        if (instructor && instructor2) {
            instructorName = `${instructor.name} / ${instructor2.name}`;
        } else if (instructor) {
            instructorName = instructor.name;
        } else if (instructor2) {
            instructorName = instructor2.name;
        }
        
        const trackLabels = {
            nurse: "אחות חדשה",
            advanced: "על בסיסי",
            intern: "סטאז'",
            student: "התנסות קצרה"
        };
        const trackClass = {
            nurse: "badge-blue",
            advanced: "badge-orange",
            intern: "badge-green",
            student: "badge-purple"
        };
        
        const isCoord = currentRole === "coordinator";
        
        tr.innerHTML = `
            <td style="font-weight: 700;">${t.name}</td>
            <td><span class="badge ${trackClass[t.track]}">${trackLabels[t.track]}</span></td>
            <td>${t.school}</td>
            <td>${instructorName}</td>
            <td>
                <div class="table-progress-container">
                    <div class="progress-bg">
                        <div class="progress-fill" style="width: ${progress}%;"></div>
                    </div>
                    <span class="progress-text">${progress}%</span>
                </div>
            </td>
            <td>
                <div style="display:flex; gap: 8px;">
                    <button class="btn btn-secondary btn-sm" onclick="viewTraineeOnboarding('${t.id}')">מעקב צ'קליסט</button>
                    ${isCoord ? `
                        <button class="btn btn-danger btn-sm" onclick="tryCompleteOrDeleteTrainee('${t.id}')">סיום/מחיקה</button>
                    ` : ""}
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function viewTraineeOnboarding(id) {
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    selectTrainee(id);
    if (trainee.track === "nurse") {
        showTab("onboarding");
    } else {
        selectedExperienceFilter = "all";
        updateExperienceFiltersUI();
        showTab("experiences");
    }
}

function calculateTraineeProgress(trainee) {
    const template = CHECKLIST_TEMPLATES[trainee.track];
    if (!template) return 0;
    
    let total = 0;
    let checked = 0;
    
    Object.keys(template).forEach(cat => {
        template[cat].forEach(item => {
            total++;
            if (trainee.checklist && trainee.checklist[item.id] && trainee.checklist[item.id].checked) {
                checked++;
            }
        });
    });
    
    return total > 0 ? Math.round((checked / total) * 100) : 0;
}

// Complete onboarding and increment instructor count
function tryCompleteOrDeleteTrainee(id) {
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    const isComplete = calculateTraineeProgress(trainee) === 100;
    
    let confirmMsg = `האם את בטוחה שברצונך למחוק את ${trainee.name} מתהליך הקליטה?`;
    if (isComplete) {
        confirmMsg = `מזל טוב! ${trainee.name} השלימה 100% מהדרישות. האם ברצונך לסיים את הקליטה שלה בהצלחה? (פעולה זו תרשום הדרכה מוצלחת נוספת למדריכה המלווה).`;
    }
    
    if (confirm(confirmMsg)) {
        if (isComplete) {
            const currentMonth = new Date().toISOString().substring(0, 7); // YYYY-MM
            if (trainee.instructorId) {
                const inst = database.instructors.find(i => i.id === trainee.instructorId);
                if (inst) {
                    inst.historyCount = (inst.historyCount || 0) + 1;
                    if (!inst.monthlyCounts) inst.monthlyCounts = {};
                    inst.monthlyCounts[currentMonth] = (inst.monthlyCounts[currentMonth] || 0) + 1;
                }
            }
            if (trainee.instructorId2) {
                const inst2 = database.instructors.find(i => i.id === trainee.instructorId2);
                if (inst2) {
                    inst2.historyCount = (inst2.historyCount || 0) + 1;
                    if (!inst2.monthlyCounts) inst2.monthlyCounts = {};
                    inst2.monthlyCounts[currentMonth] = (inst2.monthlyCounts[currentMonth] || 0) + 1;
                }
            }
        }
        
        // Remove trainee from list
        database.trainees = database.trainees.filter(t => t.id !== id);
        
        if (currentNurseId === id) {
            currentNurseId = null;
        }
        if (currentStudentId === id) {
            currentStudentId = null;
        }
        
        saveToLocalStorage();
        renderAll();
    }
}

// ================= TAB 2: ONBOARDING TRACKER LOGIC =================
function renderNurseSelector() {
    const listContainer = document.getElementById("nurse-selection-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";
    
    const searchInput = document.getElementById("nurse-search");
    const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
    
    const filtered = database.trainees.filter(t => 
        t.track === "nurse" && 
        t.name.toLowerCase().includes(searchVal)
    );
    
    if (filtered.length === 0) {
        listContainer.innerHTML = '<p style="padding: 10px; color: var(--neutral-gray); font-size: 0.9rem;">לא נמצאו אחיות...</p>';
        return;
    }
    
    filtered.forEach(t => {
        const item = document.createElement("button");
        item.className = `trainee-list-item ${t.id === currentNurseId ? "selected" : ""}`;
        item.onclick = () => selectTrainee(t.id);
        
        const progress = calculateTraineeProgress(t);
        
        item.innerHTML = `
            <span class="trainee-item-name">${t.name}</span>
            <div class="trainee-item-meta">
                <span>אחות חדשה</span>
                <strong>${progress}%</strong>
            </div>
        `;
        listContainer.appendChild(item);
    });
}

function renderExperienceSelector() {
    const listContainer = document.getElementById("student-selection-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";
    
    const searchInput = document.getElementById("student-search");
    const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
    
    const filtered = database.trainees.filter(t => {
        if (t.track === "nurse") return false;
        
        const matchesSearch = t.name.toLowerCase().includes(searchVal);
        const matchesFilter = (selectedExperienceFilter === "all") || (t.track === selectedExperienceFilter);
        
        return matchesSearch && matchesFilter;
    });
    
    if (filtered.length === 0) {
        listContainer.innerHTML = '<p style="padding: 10px; color: var(--neutral-gray); font-size: 0.9rem;">לא נמצאו משתלמים...</p>';
        return;
    }
    
    const trackLabels = {
        advanced: "על בסיסי",
        intern: "סטאז'",
        student: "התנסות קצרה"
    };
    
    const trackClass = {
        advanced: "badge-orange",
        intern: "badge-green",
        student: "badge-purple"
    };
    
    filtered.forEach(t => {
        const item = document.createElement("button");
        item.className = `trainee-list-item ${t.id === currentStudentId ? "selected" : ""}`;
        item.onclick = () => selectTrainee(t.id);
        
        const progress = calculateTraineeProgress(t);
        
        item.innerHTML = `
            <span class="trainee-item-name">${t.name}</span>
            <div class="trainee-item-meta" style="margin-top: 4px; display: flex; flex-direction: column; gap: 2px; align-items: flex-start; width: 100%;">
                <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                    <span class="badge ${trackClass[t.track]}" style="font-size: 0.75rem; padding: 2px 6px;">${trackLabels[t.track]}</span>
                    <strong>${progress}%</strong>
                </div>
                <span style="font-size: 0.8rem; color: var(--neutral-gray); margin-top: 4px; font-weight: 600;">🏫 מוסד: ${t.school}</span>
            </div>
        `;
        listContainer.appendChild(item);
    });
}

function renderNurseTab() {
    renderNurseSelector();
    renderActiveTraineeChecklist();
}

function renderExperiencesTab() {
    renderExperienceSelector();
    renderActiveTraineeChecklist();
}

function selectTrainee(id) {
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    if (trainee.track === "nurse") {
        currentNurseId = id;
        const categories = Object.keys(CHECKLIST_TEMPLATES[trainee.track] || {});
        if (categories.length > 0) {
            currentChecklistCategory = categories[0];
        }
    } else {
        currentStudentId = id;
        const categories = Object.keys(CHECKLIST_TEMPLATES[trainee.track] || {});
        if (categories.length > 0) {
            currentChecklistCategory = categories[0];
        }
    }
    
    renderNurseSelector();
    renderExperienceSelector();
    renderActiveTraineeChecklist();
}

function setDefaultChecklistCategory() {
    const firstNurse = database.trainees.find(t => t.track === "nurse");
    if (firstNurse) {
        currentNurseId = firstNurse.id;
    }
    const firstStudent = database.trainees.find(t => t.track !== "nurse");
    if (firstStudent) {
        currentStudentId = firstStudent.id;
    }
    
    const activeTrainee = firstNurse || firstStudent;
    if (activeTrainee) {
        const categories = Object.keys(CHECKLIST_TEMPLATES[activeTrainee.track] || {});
        if (categories.length > 0) {
            currentChecklistCategory = categories[0];
        }
    }
}

function setExperienceFilter(filterType) {
    selectedExperienceFilter = filterType;
    updateExperienceFiltersUI();
    
    const filteredTrainees = database.trainees.filter(t => {
        if (t.track === "nurse") return false;
        return (filterType === "all") || (t.track === filterType);
    });
    
    const isCurrentStudentInFiltered = filteredTrainees.some(t => t.id === currentStudentId);
    if (!isCurrentStudentInFiltered) {
        if (filteredTrainees.length > 0) {
            selectTrainee(filteredTrainees[0].id);
        } else {
            currentStudentId = null;
        }
    }
    
    renderExperienceSelector();
    renderActiveTraineeChecklist();
}

function updateExperienceFiltersUI() {
    const tags = document.querySelectorAll("#experience-track-filters .filter-tag");
    tags.forEach(tag => {
        if (tag.getAttribute("data-exp-track") === selectedExperienceFilter) {
            tag.classList.add("active");
        } else {
            tag.classList.remove("active");
        }
    });
}

function renderChecklistForTrainee(traineeId, panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    
    if (!traineeId) {
        const isNurse = (panelId === "nurse-details-panel");
        panel.innerHTML = `
            <div class="no-selection-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="empty-icon"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <h3>לא נבחר/ה ${isNurse ? "אחות" : "משתלם/ת"}</h3>
                <p>אנא בחרי ${isNurse ? "אחות" : "משתלם/ת"} מהרשימה בצד ימין כדי לצפות בצ'קליסט המיומנויות ובהתקדמות.</p>
            </div>
        `;
        return;
    }
    
    const trainee = database.trainees.find(t => t.id === traineeId);
    if (!trainee) return;
    
    const instructor = database.instructors.find(i => i.id === trainee.instructorId);
    const instructor2 = trainee.instructorId2 ? database.instructors.find(i => i.id === trainee.instructorId2) : null;
    let instructorName = "טרם שובצה מדריכה קלינית";
    if (instructor && instructor2) {
        instructorName = `${instructor.name} ו-${instructor2.name}`;
    } else if (instructor) {
        instructorName = instructor.name;
    } else if (instructor2) {
        instructorName = instructor2.name;
    }
    
    const trackLabels = {
        nurse: "אחות חדשה",
        advanced: "על בסיסי",
        intern: "סטאז'",
        student: "התנסות קצרה"
    };
    
    const progress = calculateTraineeProgress(trainee);
    const template = CHECKLIST_TEMPLATES[trainee.track];
    const categories = Object.keys(template || {});
    
    let activeCategory = currentChecklistCategory;
    if (!categories.includes(activeCategory) && categories.length > 0) {
        activeCategory = categories[0];
    }
    
    let categoryTabsHtml = "";
    categories.forEach(cat => {
        categoryTabsHtml += `
            <button class="checklist-tab-btn ${cat === activeCategory ? "active" : ""}" 
                    onclick="setChecklistCategory('${cat}')">${cat}</button>
        `;
    });
    
    let itemsHtml = "";
    const items = template[activeCategory] || [];
    
    if (items.length === 0) {
        itemsHtml = '<p style="padding:20px; color:var(--neutral-gray);">אין משימות בקטגוריה זו.</p>';
    } else {
        const isEditable = (currentRole === "coordinator" || trainee.track === "nurse");
        items.forEach(item => {
            const isChecked = trainee.checklist && trainee.checklist[item.id] && trainee.checklist[item.id].checked;
            const signoff = (trainee.checklist && trainee.checklist[item.id]) ? trainee.checklist[item.id] : null;
            
            itemsHtml += `
                <div class="checklist-item ${isChecked ? "checked" : ""}">
                    <div class="custom-checkbox-wrapper">
                        <input type="checkbox" class="custom-checkbox-input" 
                               ${isChecked ? "checked" : ""} 
                               ${!isEditable ? "disabled" : ""}
                               onclick="toggleChecklistItem('${item.id}', this.checked)">
                        <div class="custom-checkbox-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                    </div>
                    <div class="checklist-item-content">
                        <span class="checklist-item-title">${item.title}</span>
                        <span class="checklist-item-desc">${item.desc}</span>
                        ${isChecked && signoff && signoff.signoffDate ? `
                            <div class="checklist-item-footer">
                                <span class="signoff-badge">אושר</span>
                                <span>על ידי ${signoff.instructorName || "רכזת הדרכה"} בתאריך ${formatDate(signoff.signoffDate)}</span>
                            </div>
                        ` : ""}
                    </div>
                </div>
            `;
        });
    }
    
    let evalHtml = "";
    if (trainee.evaluation) {
        evalHtml = `
            <div class="dashboard-panel" style="margin-top: 24px; border-color: #bae6fd;">
                <div class="panel-header" style="background-color: #f0f9ff;">
                    <h3 style="color: #0369a1;">הערכת מתלמדת פעילה</h3>
                    <span>עודכן בתאריך: ${formatDate(trainee.evaluation.date)}</span>
                </div>
                <div class="panel-body" style="text-align: right;">
                    <div class="eval-grid" style="margin-bottom:12px;">
                        <div><strong>נוכחות ועמידה בזמנים:</strong> ${trainee.evaluation.attendance}</div>
                        <div><strong>ידע קליני מקצועי:</strong> ${trainee.evaluation.professional}</div>
                    </div>
                    <div style="margin-bottom:12px;"><strong>יחסי אנוש וצוות:</strong> ${trainee.evaluation.communication}</div>
                    <hr style="margin: 12px 0; border: 0; border-top: 1px solid var(--neutral-border);">
                    <div style="white-space: pre-line;"><strong>סיכום הערכה:</strong><br>${trainee.evaluation.summary}</div>
                    ${currentRole === "coordinator" ? `
                        <button class="btn btn-secondary btn-sm" style="margin-top:12px;" onclick="openEvaluationModal('${trainee.id}')">עדכון הערכה</button>
                    ` : ""}
                </div>
            </div>
        `;
    } else {
        evalHtml = `
            <div class="empty-state" style="margin-top: 24px; background: var(--neutral-surface); border: 1px dashed var(--neutral-light-gray); border-radius: var(--radius-md);">
                <p>טרם נכתבה הערכת סיכום עבור משתלם זה.</p>
                ${currentRole === "coordinator" ? `
                    <button class="btn btn-secondary btn-sm" style="margin-top:10px;" onclick="openEvaluationModal('${trainee.id}')">מילוי הערכה דיגיטלית</button>
                ` : ""}
            </div>
        `;
    }
    
    panel.innerHTML = `
        <div class="active-onboarding">
            <!-- Header bar with info -->
            <div class="onboarding-info-bar">
                <div class="onboarding-meta-right">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
                        <h3 style="margin: 0;">${trainee.name}</h3>
                        ${currentRole === "coordinator" ? `
                            <button class="btn btn-secondary btn-sm" onclick="openEditTraineeModal('${trainee.id}')" style="padding: 2px 8px; font-size: 0.8rem;">עריכה</button>
                        ` : ""}
                    </div>
                    <div class="onboarding-sub">
                        <span><strong>מסלול:</strong> ${trackLabels[trainee.track]}</span>
                        <span class="meta-divider">|</span>
                        <span><strong>מוסד:</strong> ${trainee.school}</span>
                        <span class="meta-divider">|</span>
                        <span><strong>מדריכה מלווה:</strong> ${instructorName}</span>
                    </div>
                </div>
                
                <div class="onboarding-progress-large">
                    <span class="progress-text">${progress}%</span>
                    <div class="progress-bg progress-large-bar">
                        <div class="progress-fill" style="width: ${progress}%;"></div>
                    </div>
                </div>
            </div>
            
            <!-- Checklist Area -->
            <div class="onboarding-content-area">
                <!-- Checklist Sidebar Categories -->
                <div class="checklist-tabs">
                    ${categoryTabsHtml}
                </div>
                <!-- Checklist Items List -->
                <div class="checklist-list-container">
                    ${(currentRole !== "coordinator" && trainee.track !== "nurse") ? `
                        <div class="insight-info-box" style="margin-bottom: 16px; font-size:0.85rem; padding: 10px 16px;">
                            <span>🔒 סימון מיומנויות ונהלים פתוח לשינוי <strong>לרכזת הדרכה בלבד</strong>. הצוות הכללי יכול לצפות ברשימה ובמצב ההתקדמות.</span>
                        </div>
                    ` : ""}
                    ${(currentRole !== "coordinator" && trainee.track === "nurse") ? `
                        <div class="insight-info-box" style="margin-bottom: 16px; font-size:0.85rem; padding: 10px 16px; border-color: #bbf7d0; background-color: #f0fdf4;">
                            <span style="color: #166534;">✍️ כעורכת מסלול אחות חדשה, באפשרותך לסמן מיומנויות שביצעת באופן עצמאי.</span>
                        </div>
                    ` : ""}
                    <div class="checklist-list">
                        ${itemsHtml}
                    </div>
                    
                    <!-- Evaluation card -->
                    ${evalHtml}
                </div>
            </div>
        </div>
    `;
}

function renderActiveTraineeChecklist() {
    if (currentTab === "onboarding") {
        renderChecklistForTrainee(currentNurseId, "nurse-details-panel");
    } else if (currentTab === "experiences") {
        renderChecklistForTrainee(currentStudentId, "student-details-panel");
    }
}

function setChecklistCategory(cat) {
    currentChecklistCategory = cat;
    renderActiveTraineeChecklist();
}

function toggleChecklistItem(itemId, isChecked) {
    const traineeId = (currentTab === "onboarding") ? currentNurseId : currentStudentId;
    const trainee = database.trainees.find(t => t.id === traineeId);
    if (!trainee) return;
    
    // Allow changes if coordinator, OR if trainee is nurse
    if (currentRole !== "coordinator" && trainee.track !== "nurse") return;
    
    if (!trainee.checklist) trainee.checklist = {};
    
    if (isChecked) {
        let signoffName = "";
        if (currentRole === "coordinator") {
            const instructor = database.instructors.find(i => i.id === trainee.instructorId);
            const instructor2 = trainee.instructorId2 ? database.instructors.find(i => i.id === trainee.instructorId2) : null;
            if (instructor && instructor2) {
                signoffName = `${instructor.name} ו-${instructor2.name}`;
            } else if (instructor) {
                signoffName = instructor.name;
            } else {
                signoffName = "רכזת הדרכה";
            }
        } else {
            signoffName = "מילוי עצמי (אחות חדשה)";
        }
        trainee.checklist[itemId] = {
            checked: true,
            signoffDate: new Date().toISOString().split('T')[0],
            instructorName: signoffName
        };
    } else {
        trainee.checklist[itemId] = {
            checked: false
        };
    }
    
    saveToLocalStorage();
    renderAll();
}

function openEditTraineeModal(id) {
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    document.getElementById("edit-trainee-id").value = trainee.id;
    document.getElementById("edit-trainee-name").value = trainee.name;
    document.getElementById("edit-trainee-school").value = trainee.school;
    document.getElementById("edit-trainee-start-date").value = trainee.startDate;
    
    document.getElementById("edit-trainee-track").value = trainee.track;
    
    const select = document.getElementById("edit-trainee-instructor");
    select.innerHTML = '<option value="">ללא מדריכה קלינית מלווה 1</option>';
    
    const select2 = document.getElementById("edit-trainee-instructor2");
    select2.innerHTML = '<option value="">ללא מדריכה שנייה</option>';
    
    database.instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.id;
        option.innerText = inst.name;
        
        const option1 = option.cloneNode(true);
        if (inst.id === trainee.instructorId) {
            option1.selected = true;
        }
        select.appendChild(option1);
        
        const option2 = option.cloneNode(true);
        if (inst.id === trainee.instructorId2) {
            option2.selected = true;
        }
        select2.appendChild(option2);
    });
    
    openModal("modal-edit-trainee");
}

function saveEditedTrainee() {
    const id = document.getElementById("edit-trainee-id").value;
    const name = document.getElementById("edit-trainee-name").value;
    const school = document.getElementById("edit-trainee-school").value;
    const track = document.getElementById("edit-trainee-track").value;
    const instructorId = document.getElementById("edit-trainee-instructor").value;
    const instructorId2 = document.getElementById("edit-trainee-instructor2").value;
    const startDate = document.getElementById("edit-trainee-start-date").value;
    
    if (!name || !school || !startDate) {
        alert("נא למלא את כל השדות החיוניים.");
        return;
    }
    
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) {
        alert("משתלם/ת לא נמצא/ה.");
        return;
    }
    
    const oldTrack = trainee.track;
    if (track !== oldTrack) {
        if (confirm("שינוי מסלול ההדרכה יאפס את צ'קליסט המיומנויות של המשתלם/ת. האם להמשיך?")) {
            trainee.track = track;
            // Re-initialize checklist
            const trackTemplate = CHECKLIST_TEMPLATES[track];
            const checklist = {};
            if (trackTemplate) {
                Object.keys(trackTemplate).forEach(cat => {
                    trackTemplate[cat].forEach(item => {
                        checklist[item.id] = { checked: false };
                    });
                });
            }
            trainee.checklist = checklist;
            // Reset active category
            const categories = Object.keys(trackTemplate || {});
            if (categories.length > 0) {
                currentChecklistCategory = categories[0];
            }
            
            // Switch tabs if necessary
            if (track === "nurse") {
                currentNurseId = trainee.id;
                currentTab = "onboarding";
            } else {
                currentStudentId = trainee.id;
                currentTab = "experiences";
            }
        } else {
            // Keep old track value in UI and abort saving
            document.getElementById("edit-trainee-track").value = oldTrack;
            return;
        }
    }
    
    trainee.name = name;
    trainee.school = school;
    trainee.instructorId = instructorId || null;
    trainee.instructorId2 = instructorId2 || null;
    trainee.startDate = startDate;
    
    saveToLocalStorage();
    closeModal("modal-edit-trainee");
    renderAll();
}

function deleteTraineeFromEditModal() {
    const id = document.getElementById("edit-trainee-id").value;
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    if (confirm(`האם את בטוחה שברצונך למחוק את ${trainee.name} מתהליך ההדרכה?`)) {
        database.trainees = database.trainees.filter(t => t.id !== id);
        
        if (currentNurseId === id) {
            currentNurseId = null;
        }
        if (currentStudentId === id) {
            currentStudentId = null;
        }
        
        saveToLocalStorage();
        closeModal("modal-edit-trainee");
        renderAll();
    }
}

// ================= TAB 3: INSTRUCTORS MANAGEMENT (COORDINATOR ONLY) =================
function renderInstructors() {
    const tableBody = document.getElementById("instructors-table-body");
    if (!tableBody) return;
    tableBody.innerHTML = "";
    
    // Count active instructors & busy ones
    let activeInstructorsCount = database.instructors.length;
    let busyCount = 0;
    
    document.getElementById("stat-total-instructors-count").innerText = activeInstructorsCount;
    
    database.instructors.forEach(inst => {
        const tr = document.createElement("tr");
        
        // Find if this instructor is currently mentoring someone active
                const traineesTaught = database.trainees.filter(t => t.instructorId === inst.id || t.instructorId2 === inst.id);
        let currentTraineesHtml = "";
        
        if (traineesTaught.length > 0) {
            busyCount++;
            currentTraineesHtml = traineesTaught.map(t => {
                const trackLabels = { nurse: "אחות חדשה", advanced: "על בסיסי", intern: "סטאז'", student: "התנסות" };
                return `<div style="margin-bottom: 4px;"><strong>${t.name}</strong> <span class="badge badge-blue" style="font-size:0.7rem; padding: 2px 6px;">${trackLabels[t.track]}</span></div>`;
            }).join("");
        } else {
            currentTraineesHtml = '<span class="text-green" style="font-weight:700;">פנויה להדרכה</span>';
        }
        
        tr.innerHTML = `
            <td style="font-weight: 700;">${inst.name}</td>
            <td style="font-family: var(--font-english); font-weight: 600; direction: ltr; text-align: right;">${inst.phone || "-"}</td>
            <td style="font-size: 0.9rem; color: var(--neutral-gray);">${inst.specialty || "-"}</td>
            <td>${currentTraineesHtml}</td>
            <td class="stats-col" style="font-weight: 800; font-size:1.1rem; color: var(--primary-blue);">${inst.historyCount || 0} הדרכות</td>
            <td>
                <div style="display:flex; gap: 8px;">
                    <button class="btn btn-secondary btn-sm" onclick="openEditInstructor('${inst.id}')">עריכה</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteInstructor('${inst.id}')">מחיקה</button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
    
    document.getElementById("stat-busy-instructors").innerText = busyCount;
    
    // Render monthly report
    renderMonthlyReport();
}

function deleteInstructor(id) {
    const inst = database.instructors.find(i => i.id === id);
    if (!inst) return;
    
    // Check if currently teaching
    const isTeaching = database.trainees.some(t => t.instructorId === id || t.instructorId2 === id);
    if (isTeaching) {
        alert(`לא ניתן למחוק את ${inst.name} מכיוון שהיא משובצת כעת להדרכה פעילה. הסירי תחילה את השיבוץ שלה.`);
        return;
    }
    
    if (confirm(`האם את בטוחה שברצונך למחוק את המדריכה הקלינית ${inst.name}?`)) {
        database.instructors = database.instructors.filter(i => i.id !== id);
        saveToLocalStorage();
        renderAll();
    }
}

// ================= TAB 4: PROTOCOLS & RESOURCS =================
let activeProtocolCategory = "all";

function renderProtocols() {
    const grid = document.getElementById("protocols-grid-container");
    if (!grid) return;
    grid.innerHTML = "";
    
    const searchVal = document.getElementById("protocol-search").value.toLowerCase();
    
    const filtered = database.protocols.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal);
        const matchesCategory = (activeProtocolCategory === "all") || (p.category === activeProtocolCategory);
        return matchesSearch && matchesCategory;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><p>לא נמצאו נהלים או סילבוסים המתאימים לסינון.</p></div>';
        return;
    }
    
    const categoryLabels = {
        nurse: "אחיות חדשות",
        advanced: "על בסיסי",
        intern: "סטאז'",
        student: "סטודנטים (התנסות)",
        general: "נהלים כלליים"
    };
    
    const categoryBadges = {
        nurse: "badge-blue",
        advanced: "badge-orange",
        intern: "badge-green",
        student: "badge-purple",
        general: "badge-blue"
    };
    
    const isCoord = currentRole === "coordinator";
    
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "protocol-card";
        
        card.innerHTML = `
            <div>
                <div class="protocol-card-header">
                    <span class="badge ${categoryBadges[p.category]} protocol-category-badge">${categoryLabels[p.category]}</span>
                    ${isCoord ? `
                        <button class="btn-icon" style="color: var(--danger-red);" onclick="deleteProtocol('${p.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                    ` : ""}
                </div>
                <div class="protocol-card-body">
                    <h4>${p.title}</h4>
                    <p>${p.desc}</p>
                </div>
            </div>
            <div class="protocol-card-footer">
                <a href="${p.url || '#'}" target="_blank" class="btn btn-secondary btn-sm" onclick="if(!this.getAttribute('href') || this.getAttribute('href')==='#'){ alert('לא הוגדר נתיב חוקי לקובץ.'); return false;}">פתח קובץ</a>
                <span class="protocol-path" title="${p.url || 'לא הוגדר קישור'}">${p.url ? p.url.split('/').pop() : 'ללא קישור'}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProtocols() {
    renderProtocols();
}

function filterProtocolCategory(cat) {
    activeProtocolCategory = cat;
    
    // Update tag styles
    const tags = document.querySelectorAll("#protocol-category-filters .filter-tag");
    tags.forEach(tag => {
        if (tag.getAttribute("data-category") === cat) {
            tag.classList.add("active");
        } else {
            tag.classList.remove("active");
        }
    });
    
    renderProtocols();
}

function deleteProtocol(id) {
    if (confirm("האם את בטוחה שברצונך למחוק קובץ/נוהל זה מהספרייה?")) {
        database.protocols = database.protocols.filter(p => p.id !== id);
        saveToLocalStorage();
        renderAll();
    }
}

// ================= MODAL ACTIONS =================
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    
    // Clear errors if passcode modal
    if (modalId === "modal-passcode") {
        document.getElementById("passcode-error").classList.add("hidden");
    }
}

// Open Add Trainee Modal and pre-populate instructors
function openAddTraineeModal(defaultTrack, disableTrackDropdown = true) {
    const select = document.getElementById("trainee-instructor");
    select.innerHTML = '<option value="">ללא מדריכה קלינית מלווה 1</option>';
    
    const select2 = document.getElementById("trainee-instructor2");
    select2.innerHTML = '<option value="">ללא מדריכה שנייה</option>';
    
    database.instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.id;
        option.innerText = inst.name;
        select.appendChild(option);
        
        const option2 = option.cloneNode(true);
        select2.appendChild(option2);
    });
    
    const trackSelect = document.getElementById("trainee-track");
    if (defaultTrack) {
        trackSelect.value = defaultTrack;
        trackSelect.disabled = disableTrackDropdown;
    } else {
        trackSelect.value = "nurse";
        trackSelect.disabled = false;
    }
    
    openModal("modal-add-trainee");
}

function saveTrainee() {
    const name = document.getElementById("trainee-name").value;
    const track = document.getElementById("trainee-track").value;
    const school = document.getElementById("trainee-school").value;
    const instructorId = document.getElementById("trainee-instructor").value;
    const instructorId2 = document.getElementById("trainee-instructor2").value;
    const startDate = document.getElementById("trainee-start-date").value;
    
    if (!name || !school || !startDate) {
        alert("נא למלא את כל השדות החיוניים.");
        return;
    }
    
    // Initialize blank checklist based on selected track template
    const trackTemplate = CHECKLIST_TEMPLATES[track];
    const checklist = {};
    
    if (trackTemplate) {
        Object.keys(trackTemplate).forEach(cat => {
            trackTemplate[cat].forEach(item => {
                checklist[item.id] = { checked: false };
            });
        });
    }
    
    const newTrainee = {
        id: "tr-" + Date.now(),
        name,
        track,
        school,
        instructorId: instructorId || null,
        instructorId2: instructorId2 || null,
        startDate,
        checklist,
        evaluation: null
    };
    
    database.trainees.push(newTrainee);
    saveToLocalStorage();
    
    // Reset form
    document.getElementById("form-add-trainee").reset();
    document.getElementById("trainee-track").disabled = false;
    document.getElementById("trainee-start-date").value = new Date().toISOString().split('T')[0];
    
    closeModal("modal-add-trainee");
    
    // Select the new trainee in the corresponding list and show appropriate tab
    if (track === "nurse") {
        currentNurseId = newTrainee.id;
        showTab("onboarding");
    } else {
        currentStudentId = newTrainee.id;
        selectedExperienceFilter = "all";
        updateExperienceFiltersUI();
        showTab("experiences");
    }
    
    renderAll();
}

function onTrackChangedInForm() {
    // Can add context helper dynamically if needed
}

// Add Instructor
function openAddInstructorModal() {
    openModal("modal-add-instructor");
}

function saveInstructor() {
    const name = document.getElementById("instructor-name").value;
    const phone = document.getElementById("instructor-phone").value;
    const specialty = document.getElementById("instructor-specialty").value;
    const historyCount = parseInt(document.getElementById("instructor-history").value) || 0;
    
    if (!name) {
        alert("נא להזין את שם המדריכה.");
        return;
    }
    
    const newInstructor = {
        id: "inst-" + Date.now(),
        name,
        phone,
        specialty,
        historyCount,
        monthlyCounts: {}
    };
    
    database.instructors.push(newInstructor);
    saveToLocalStorage();
    
    document.getElementById("form-add-instructor").reset();
    closeModal("modal-add-instructor");
    renderAll();
}

// Add Protocol
function openAddProtocolModal() {
    openModal("modal-add-protocol");
}

function saveProtocol() {
    const title = document.getElementById("protocol-title").value;
    const category = document.getElementById("protocol-category").value;
    const desc = document.getElementById("protocol-desc").value;
    const url = document.getElementById("protocol-url").value;
    
    if (!title || !desc) {
        alert("נא למלא שדות כותרת ותיאור.");
        return;
    }
    
    const newProtocol = {
        id: "prot-" + Date.now(),
        title,
        category,
        desc,
        url: url || null
    };
    
    database.protocols.push(newProtocol);
    saveToLocalStorage();
    
    document.getElementById("form-add-protocol").reset();
    closeModal("modal-add-protocol");
    renderAll();
}

// Evaluation Modal Management
function openEvaluationModal(traineeId) {
    const trainee = database.trainees.find(t => t.id === traineeId);
    if (!trainee) return;
    
    document.getElementById("eval-trainee-id").value = traineeId;
    document.getElementById("eval-trainee-name").innerText = trainee.name;
    
    const trackLabels = { nurse: "אחות חדשה", advanced: "על בסיסי", intern: "סטאז'", student: "התנסות קצרה" };
    document.getElementById("eval-trainee-track-info").innerText = `מסלול: ${trackLabels[trainee.track]} | מוסד: ${trainee.school}`;
    
    // Pre-populate if evaluation already exists
    if (trainee.evaluation) {
        document.getElementById("eval-attendance").value = trainee.evaluation.attendance || "";
        document.getElementById("eval-professional").value = trainee.evaluation.professional || "";
        document.getElementById("eval-communication").value = trainee.evaluation.communication || "";
        document.getElementById("eval-summary").value = trainee.evaluation.summary || "";
    } else {
        document.getElementById("form-evaluation").reset();
    }
    
    openModal("modal-evaluation");
}

function saveEvaluation() {
    const id = document.getElementById("eval-trainee-id").value;
    const trainee = database.trainees.find(t => t.id === id);
    if (!trainee) return;
    
    const attendance = document.getElementById("eval-attendance").value;
    const professional = document.getElementById("eval-professional").value;
    const communication = document.getElementById("eval-communication").value;
    const summary = document.getElementById("eval-summary").value;
    
    if (!attendance || !professional || !communication) {
        alert("נא לבחור ציונים לכלל המיומנויות.");
        return;
    }
    
    trainee.evaluation = {
        attendance,
        professional,
        communication,
        summary,
        date: new Date().toISOString().split('T')[0]
    };
    
    saveToLocalStorage();
    closeModal("modal-evaluation");
    renderAll();
}

// Edit Instructor info
let editingInstructorId = null;
function openEditInstructor(id) {
    const inst = database.instructors.find(i => i.id === id);
    if (!inst) return;
    
    editingInstructorId = id;
    
    // Using the same Modal as Add Instructor, changing title and pre-filling
    document.getElementById("instructor-name").value = inst.name;
    document.getElementById("instructor-phone").value = inst.phone || "";
    document.getElementById("instructor-specialty").value = inst.specialty || "";
    document.getElementById("instructor-history").value = inst.historyCount || 0;
    
    const header = document.querySelector("#modal-add-instructor h3");
    header.innerText = "עריכת פרטי מדריכה";
    
    // Change button action temporarily
    const saveBtn = document.querySelector("#modal-add-instructor .btn-primary");
    saveBtn.onclick = saveEditedInstructor;
    
    openModal("modal-add-instructor");
}

function saveEditedInstructor() {
    const inst = database.instructors.find(i => i.id === editingInstructorId);
    if (!inst) return;
    
    const name = document.getElementById("instructor-name").value;
    const phone = document.getElementById("instructor-phone").value;
    const specialty = document.getElementById("instructor-specialty").value;
    const historyCount = parseInt(document.getElementById("instructor-history").value) || 0;
    
    if (!name) {
        alert("נא להזין את שם המדריכה.");
        return;
    }
    
    inst.name = name;
    inst.phone = phone;
    inst.specialty = specialty;
    inst.historyCount = historyCount;
    
    saveToLocalStorage();
    
    // Reset modal state back to normal "Add"
    document.getElementById("form-add-instructor").reset();
    const header = document.querySelector("#modal-add-instructor h3");
    header.innerText = "הוספת מדריכה קלינית";
    const saveBtn = document.querySelector("#modal-add-instructor .btn-primary");
    saveBtn.onclick = saveInstructor;
    
    closeModal("modal-add-instructor");
    editingInstructorId = null;
    renderAll();
}

// ================= GENERAL HELPERS =================
function formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
}

// ================= MONTHLY REPORT & ACTIVITY TRACKER =================
function renderMonthlyReport() {
    const tableBody = document.getElementById("monthly-report-table-body");
    if (!tableBody) return;
    
    const monthSelect = document.getElementById("report-month-select");
    if (!monthSelect) return;
    
    // Set default month if empty
    if (!monthSelect.value) {
        monthSelect.value = new Date().toISOString().substring(0, 7); // YYYY-MM
    }
    
    const selectedMonth = monthSelect.value;
    tableBody.innerHTML = "";
    
    database.instructors.forEach(inst => {
        const tr = document.createElement("tr");
        
        if (!inst.monthlyCounts) inst.monthlyCounts = {};
        const count = inst.monthlyCounts[selectedMonth] || 0;
        const total = inst.historyCount || 0;
        
        tr.innerHTML = `
            <td style="font-weight: 700;">${inst.name}</td>
            <td style="text-align: center; font-weight: 700; font-size: 1.1rem; color: var(--primary-blue);">${count} הדרכות</td>
            <td>
                <div style="display: flex; justify-content: center; align-items: center; gap: 12px;">
                    <button class="btn btn-secondary btn-sm" onclick="adjustMonthlyCount('${inst.id}', -1)" style="padding: 4px 12px; font-weight: 800; font-size: 1.1rem; border-radius: 6px; border: 1px solid var(--neutral-border); background-color: var(--neutral-surface);">-</button>
                    <span style="font-weight: 800; font-size: 1.2rem; min-width: 36px; text-align: center;">${count}</span>
                    <button class="btn btn-secondary btn-sm" onclick="adjustMonthlyCount('${inst.id}', 1)" style="padding: 4px 12px; font-weight: 800; font-size: 1.1rem; border-radius: 6px; color: var(--success-green); border-color: var(--success-green); background-color: var(--neutral-surface);">+</button>
                </div>
            </td>
            <td style="text-align: center; font-weight: 800; font-size: 1.1rem; color: var(--neutral-dark);">${total} הדרכות</td>
        `;
        tableBody.appendChild(tr);
    });
}

function adjustMonthlyCount(instId, amount) {
    const inst = database.instructors.find(i => i.id === instId);
    if (!inst) return;
    
    const monthSelect = document.getElementById("report-month-select");
    if (!monthSelect) return;
    
    const selectedMonth = monthSelect.value;
    if (!inst.monthlyCounts) inst.monthlyCounts = {};
    
    const currentCount = inst.monthlyCounts[selectedMonth] || 0;
    const newCount = currentCount + amount;
    
    if (newCount < 0) return; // Cannot be less than 0
    
    inst.monthlyCounts[selectedMonth] = newCount;
    
    // Also adjust overall annual total historyCount
    inst.historyCount = (inst.historyCount || 0) + amount;
    if (inst.historyCount < 0) inst.historyCount = 0;
    
    saveToLocalStorage();
    renderAll();
}

// ================= FORTNIGHTLY PLACEMENTS & ANNUAL PLAN =================
function renderFortnightlyPlacements() {
    // Render the annual plan link
    const linkContainer = document.getElementById("annual-plan-link-container");
    if (linkContainer) {
        if (database.annualPlanUrl) {
            linkContainer.innerHTML = `
                <a href="${database.annualPlanUrl}" target="_blank" style="color: #c2410c; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    קובץ תוכנית שנתית: ${database.annualPlanName || "תוכנית שנתית"}
                </a>
            `;
        } else {
            linkContainer.innerHTML = `<span style="color: var(--neutral-gray); font-style: italic;">לא קושר קובץ תוכנית שנתית</span>`;
        }
    }
    
    const tableBody = document.getElementById("fortnightly-placements-table-body");
    if (!tableBody) return;
    tableBody.innerHTML = "";
    
    if (!database.fortnightlyPlacements) database.fortnightlyPlacements = [];
    
    database.fortnightlyPlacements.forEach(placement => {
        const tr = document.createElement("tr");
        
        const instructor = database.instructors.find(i => i.id === placement.instructorId);
        const instructorName = instructor ? instructor.name : '<span class="text-orange">לא שובצה</span>';
        
        const statusLabels = {
            scheduled: "מתוכנן",
            active: "פעיל כעת",
            completed: "הושלם"
        };
        const statusClasses = {
            scheduled: "badge-blue",
            active: "badge-orange",
            completed: "badge-green"
        };
        
        tr.innerHTML = `
            <td style="font-weight: 700; font-family: var(--font-english); direction: ltr; text-align: right;">
                ${formatDate(placement.startDate)} - ${formatDate(placement.endDate)}
            </td>
            <td><strong>${placement.groupName}</strong></td>
            <td>${instructorName}</td>
            <td style="text-align: center;"><span class="badge ${statusClasses[placement.status]}">${statusLabels[placement.status]}</span></td>
            <td>
                <div style="display:flex; gap: 8px;">
                    <button class="btn btn-secondary btn-sm" onclick="openEditPlacement('${placement.id}')">עריכה</button>
                    <button class="btn btn-danger btn-sm" onclick="deletePlacement('${placement.id}')">מחיקה</button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function autoCalculateEndDate() {
    const startDateInput = document.getElementById("placement-start-date");
    const endDateInput = document.getElementById("placement-end-date");
    if (!startDateInput || !startDateInput.value || !endDateInput) return;
    
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 13); // exactly 14 days total
    
    endDateInput.value = endDate.toISOString().split('T')[0];
}

function openUploadPlanModal() {
    document.getElementById("plan-url").value = database.annualPlanUrl || "";
    document.getElementById("plan-name").value = database.annualPlanName || "";
    openModal("modal-upload-plan");
}

function saveAnnualPlanLink() {
    const url = document.getElementById("plan-url").value;
    const name = document.getElementById("plan-name").value;
    
    if (!url || !name) {
        alert("נא למלא את כל השדות.");
        return;
    }
    
    database.annualPlanUrl = url;
    database.annualPlanName = name;
    
    saveToLocalStorage();
    closeModal("modal-upload-plan");
    renderFortnightlyPlacements();
}

function openAddPlacementModal() {
    document.getElementById("form-add-placement").reset();
    document.getElementById("placement-id").value = "";
    
    const startInput = document.getElementById("placement-start-date");
    if (startInput) {
        startInput.value = new Date().toISOString().split('T')[0];
        autoCalculateEndDate();
    }
    
    const select = document.getElementById("placement-instructor");
    select.innerHTML = '<option value="">בחרי מדריכה...</option>';
    database.instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.id;
        option.innerText = inst.name;
        select.appendChild(option);
    });
    
    document.getElementById("placement-modal-title").innerText = "הוספת מחזור שיבוץ דו-שבועי";
    openModal("modal-add-placement");
}

function openEditPlacement(id) {
    const placement = database.fortnightlyPlacements.find(p => p.id === id);
    if (!placement) return;
    
    document.getElementById("placement-id").value = id;
    document.getElementById("placement-start-date").value = placement.startDate;
    document.getElementById("placement-end-date").value = placement.endDate;
    document.getElementById("placement-group-name").value = placement.groupName;
    document.getElementById("placement-status").value = placement.status;
    
    const select = document.getElementById("placement-instructor");
    select.innerHTML = '<option value="">בחרי מדריכה...</option>';
    database.instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.id;
        option.innerText = inst.name;
        if (inst.id === placement.instructorId) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    document.getElementById("placement-modal-title").innerText = "עריכת מחזור שיבוץ דו-שבועי";
    openModal("modal-add-placement");
}

function savePlacement() {
    const id = document.getElementById("placement-id").value;
    const startDate = document.getElementById("placement-start-date").value;
    const endDate = document.getElementById("placement-end-date").value;
    const groupName = document.getElementById("placement-group-name").value;
    const instructorId = document.getElementById("placement-instructor").value;
    const status = document.getElementById("placement-status").value;
    
    if (!startDate || !endDate || !groupName || !instructorId) {
        alert("נא למלא את כל שדות החובה ולשבץ מדריכה.");
        return;
    }
    
    if (id) {
        const placement = database.fortnightlyPlacements.find(p => p.id === id);
        if (placement) {
            const oldStatus = placement.status;
            placement.startDate = startDate;
            placement.endDate = endDate;
            placement.groupName = groupName;
            
            if (status === "completed" && oldStatus !== "completed" && instructorId) {
                const inst = database.instructors.find(i => i.id === instructorId);
                if (inst) {
                    inst.historyCount = (inst.historyCount || 0) + 1;
                    const month = startDate.substring(0, 7);
                    if (!inst.monthlyCounts) inst.monthlyCounts = {};
                    inst.monthlyCounts[month] = (inst.monthlyCounts[month] || 0) + 1;
                }
            } else if (status !== "completed" && oldStatus === "completed" && instructorId) {
                const inst = database.instructors.find(i => i.id === instructorId);
                if (inst) {
                    inst.historyCount = (inst.historyCount || 0) - 1;
                    if (inst.historyCount < 0) inst.historyCount = 0;
                    const month = startDate.substring(0, 7);
                    if (inst.monthlyCounts && inst.monthlyCounts[month]) {
                        inst.monthlyCounts[month] = inst.monthlyCounts[month] - 1;
                        if (inst.monthlyCounts[month] < 0) inst.monthlyCounts[month] = 0;
                    }
                }
            }
            
            placement.instructorId = instructorId;
            placement.status = status;
        }
    } else {
        const newPlacement = {
            id: "fn-" + Date.now(),
            startDate,
            endDate,
            groupName,
            instructorId,
            status
        };
        
        if (status === "completed") {
            const inst = database.instructors.find(i => i.id === instructorId);
            if (inst) {
                inst.historyCount = (inst.historyCount || 0) + 1;
                const month = startDate.substring(0, 7);
                if (!inst.monthlyCounts) inst.monthlyCounts = {};
                inst.monthlyCounts[month] = (inst.monthlyCounts[month] || 0) + 1;
            }
        }
        
        database.fortnightlyPlacements.push(newPlacement);
    }
    
    saveToLocalStorage();
    closeModal("modal-add-placement");
    renderAll();
}

function deletePlacement(id) {
    const placement = database.fortnightlyPlacements.find(p => p.id === id);
    if (!placement) return;
    
    if (confirm("האם את בטוחה שברצונך למחוק שיבוץ זה?")) {
        if (placement.status === "completed" && placement.instructorId) {
            const inst = database.instructors.find(i => i.id === placement.instructorId);
            if (inst) {
                inst.historyCount = (inst.historyCount || 0) - 1;
                if (inst.historyCount < 0) inst.historyCount = 0;
                const month = placement.startDate.substring(0, 7);
                if (inst.monthlyCounts && inst.monthlyCounts[month]) {
                    inst.monthlyCounts[month] = inst.monthlyCounts[month] - 1;
                    if (inst.monthlyCounts[month] < 0) inst.monthlyCounts[month] = 0;
                }
            }
        }
        
        database.fortnightlyPlacements = database.fortnightlyPlacements.filter(p => p.id !== id);
        saveToLocalStorage();
        renderAll();
    }
}
