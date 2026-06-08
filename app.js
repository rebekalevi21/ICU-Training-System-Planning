// ================= INITIAL STATE & DATA TEMPLATES =================

// Passcode for Training Coordinator access
const COORDINATOR_PASSCODE = "1234";

// Initial mock data to populate localStorage if empty
const INITIAL_INSTRUCTORS = [
    { id: "inst-1", name: "מיכל אהרון", specialty: "הנשמה מתקדמת וטיפול נשימתי, הדריכה בעל-בסיסי", historyCount: 5 },
    { id: "inst-2", name: "רינת לוין", specialty: "טיפול בטראומה מורכבת ונוירוכירורגיה", historyCount: 3 },
    { id: "inst-3", name: "יעל שדה", specialty: "קווי עורק, ניטור המודינמי ואקמו", historyCount: 7 },
    { id: "inst-4", name: "חן כהן", specialty: "ניהול פרמקולוגי ותרופות טיפול נמרץ", historyCount: 2 },
    { id: "inst-5", name: "טלי גולדברג", specialty: "קליטת צוות צעיר, תקשורת בינאישית במצבי לחץ", historyCount: 4 }
];

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
        "אוריאנטציה והכרות": [
            { id: "nurse-1", title: "מבנה הפיזי של המחלקה", desc: "סיור במחלקה, אזורי אחסון ציוד (חדר נקי, חדר מלוכלך), בית מרקחת ומיקום ציוד חירום." },
            { id: "nurse-2", title: "נהלי בטיחות ומניעת זיהומים", desc: "בידודים (מגע, טיפתי, נשימתי), שטיפת ידיים, שימוש במיגון אישי והשלכת פסולת רפואית." },
            { id: "nurse-3", title: "עגלת החייאה ודפיברילטור", desc: "מיקום עגלות החייאה, הרכב מגירות תרופות, בדיקה יומית של דפיברילטור והפעלה מהירה." }
        ],
        "מיומנויות קליניות קריטיות": [
            { id: "nurse-4", title: "מערכות הנשמה (Ventilators)", desc: "חיבור מנשם, ביצוע SST (כיול עצמי), זיהוי מודי הנשמה בסיסיים (VC, PC, PS) וטיפול באזעקות נפוצות." },
            { id: "nurse-5", title: "קו עורקי (Arterial Line)", desc: "כיול טרנסדוסר (אפס), שטיפה, שאיבת דם לבדיקת גזים עורקיים (ABG) וחבישת הקיבוע." },
            { id: "nurse-6", title: "תרופות מצילות חיים (Inotropes & Sedatives)", desc: "חישוב מינונים, הכנה של Noradrenaline, Dopamine, Propofol, מעקב לחץ דם רציף וקצב לב." },
            { id: "nurse-7", title: "טיפול בצינור קנה (Intubation & Suction)", desc: "ביצוע סקשיין (סגור/פתוח), מדידת לחץ בבלונית (Cuff), מעקב קפנוגרפיה (EtCO2) והערכת מצב קיבוע." }
        ],
        "מערכות מידע ותיעוד": [
            { id: "nurse-8", title: "רישום בגיליון ממוחשב (קמיליון)", desc: "הזנת סימנים חיוניים, מאזן נוזלים שעתי, מעקב עירויים ורישום סמים ותרופות מיוחדות." },
            { id: "nurse-9", title: "נוהל קבלה ושחרור מטופל", desc: "סדר פעולות בקבלת חולה מחדר ניתוח/מלר\"ד, שחרור למחלקה רגילה והעברת דיווח מסודר (SBAR)." }
        ]
    },
    advanced: {
        "נושאי ליבה על-בסיסי": [
            { id: "adv-1", title: "ניטור המודינמי מתקדם", desc: "הבנת מדדי Swan-Ganz, תפוקת לב (CO), התנגדות כלי דם (SVR), ושימוש ב-FloTrac." },
            { id: "adv-2", title: "טיפול תחליפי כלייתי רציף (CRRD / Prismaflex)", desc: "הרכבת סט פילטר, כיול המכשיר, הגדרת זרימות וטיפול בסתימת פילטר/קרישה." },
            { id: "adv-3", title: "עקרונות תמיכת ECMO במחלקה", desc: "מעקב זרימות, ניטור נוגדי קרישה (ACT/APTT), תגובה במקרה של ניתוק או כשל במשאבה." }
        ]
    },
    intern: {
        "דגשי סטאז' בטיפול נמרץ": [
            { id: "intern-1", title: "ניהול וניטור סימנים חיוניים", desc: "חיבור מוניטור, הגדרת גבולות אזעקה והבנת עקומות אק\"ג, סטורציה ולחץ דם פולשני." },
            { id: "intern-2", title: "הכנת סביבת המטופל הקריטי", desc: "בדיקת תקינות מערכות שאיבה (סקשיין), מיכל חמצן, ערכת החייאה ומנשם במצב Standby." },
            { id: "intern-3", title: "תרגול דיווח והצגת מקרה בסבב", desc: "למידה והצגת חולה מורכב לפי שיטת מערכות גוף (נוירולוגי, נשימתי, קרדיווסקולרי, כליות)." }
        ]
    },
    student: {
        "התנסות קלינית קצרה": [
            { id: "stud-1", title: "היכרות עם סביבת טיפול נמרץ", desc: "הבנת ההבדל בין מחלקה רגילה לטיפול נמרץ, מעורבות הצוות הרב-מקצועי ושמירה על פרטיות המטופל." },
            { id: "stud-2", title: "עזרה בסיסית בטיפול סיעודי בחולה מורדם ומונשם", desc: "תרגול רחצה, טיפול פה למניעת דלקת ריאות (VAP), שינוי תנוחות ומניעת פצעי לחץ." },
            { id: "stud-3", title: "מעקב ומדידות בסיסיות", desc: "ספירת מאזן נוזלים, קריאת מדידת שתן שעתית ומעקב הפרשות מנקזים." }
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
            "nurse-1": { checked: true, signoffDate: "2026-05-02", instructorName: "מיכל אהרון" },
            "nurse-2": { checked: true, signoffDate: "2026-05-02", instructorName: "מיכל אהרון" },
            "nurse-3": { checked: true, signoffDate: "2026-05-05", instructorName: "מיכל אהרון" },
            "nurse-4": { checked: false },
            "nurse-5": { checked: false },
            "nurse-6": { checked: false },
            "nurse-7": { checked: false },
            "nurse-8": { checked: true, signoffDate: "2026-05-15", instructorName: "מיכל אהרון" },
            "nurse-9": { checked: false }
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
            "intern-1": { checked: true, signoffDate: "2026-05-22", instructorName: "יעל שדה" },
            "intern-2": { checked: true, signoffDate: "2026-05-25", instructorName: "יעל שדה" },
            "intern-3": { checked: false }
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
            "adv-1": { checked: true, signoffDate: "2026-04-20", instructorName: "רינת לוין" },
            "adv-2": { checked: false },
            "adv-3": { checked: false }
        },
        evaluation: null
    }
];

// ================= GLOBAL STATE =================
let currentRole = "staff"; // 'staff' or 'coordinator'
let currentTab = "dashboard";
let currentTraineeId = null;
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
        } else {
            // Setup default data
            database.instructors = [...INITIAL_INSTRUCTORS];
            database.trainees = [...INITIAL_TRAINEES];
            database.protocols = [...INITIAL_PROTOCOLS];
            saveToLocalStorage();
        }
    } catch (e) {
        console.error("שגיאה בטעינת נתונים מ-LocalStorage:", e);
        // Fallback to memory
        database.instructors = [...INITIAL_INSTRUCTORS];
        database.trainees = [...INITIAL_TRAINEES];
        database.protocols = [...INITIAL_PROTOCOLS];
    }
}

// Save database state to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem("icu_instructors", JSON.stringify(database.instructors));
        localStorage.setItem("icu_trainees", JSON.stringify(database.trainees));
        localStorage.setItem("icu_protocols", JSON.stringify(database.protocols));
    } catch (e) {
        console.error("שגיאה בשמירת נתונים ל-LocalStorage:", e);
    }
}

// ================= RENDER CONTROL HUB =================
function renderAll() {
    renderDashboard();
    renderTraineeSelector();
    renderActiveTraineeChecklist();
    renderInstructors();
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
    if (tabName === "onboarding" && currentTraineeId === null && database.trainees.length > 0) {
        // Auto-select first trainee
        selectTrainee(database.trainees[0].id);
    }
    
    renderAll();
}

// ================= TAB 1: DASHBOARD LOGIC =================
function renderDashboard() {
    // Stats calculation
    const totalTrainees = database.trainees.length;
    document.getElementById("stat-total-trainees").innerText = totalTrainees;
    
    // Active Instructors (instructors currently assigned to an active trainee)
    const activeInstructorIds = new Set(
        database.trainees
            .filter(t => t.instructorId)
            .map(t => t.instructorId)
    );
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
        const instructorName = instructor ? instructor.name : '<span class="text-orange">לא שובצה</span>';
        
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
    selectTrainee(id);
    showTab("onboarding");
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
        if (isComplete && trainee.instructorId) {
            // Increment instructor's count
            const inst = database.instructors.find(i => i.id === trainee.instructorId);
            if (inst) {
                inst.historyCount = (inst.historyCount || 0) + 1;
            }
        }
        
        // Remove trainee from list
        database.trainees = database.trainees.filter(t => t.id !== id);
        
        if (currentTraineeId === id) {
            currentTraineeId = null;
        }
        
        saveToLocalStorage();
        renderAll();
    }
}

// ================= TAB 2: ONBOARDING TRACKER LOGIC =================
function renderTraineeSelector() {
    const listContainer = document.getElementById("trainee-selection-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";
    
    const searchVal = document.getElementById("trainee-search").value.toLowerCase();
    
    const filtered = database.trainees.filter(t => t.name.toLowerCase().includes(searchVal));
    
    if (filtered.length === 0) {
        listContainer.innerHTML = '<p style="padding: 10px; color: var(--neutral-gray); font-size: 0.9rem;">לא נמצאו משתלמים...</p>';
        return;
    }
    
    const trackLabels = {
        nurse: "אחות חדשה",
        advanced: "על בסיסי",
        intern: "סטאז'",
        student: "התנסות קצרה"
    };
    
    filtered.forEach(t => {
        const item = document.createElement("button");
        item.className = `trainee-list-item ${t.id === currentTraineeId ? "selected" : ""}`;
        item.onclick = () => selectTrainee(t.id);
        
        const progress = calculateTraineeProgress(t);
        
        item.innerHTML = `
            <span class="trainee-item-name">${t.name}</span>
            <div class="trainee-item-meta">
                <span>${trackLabels[t.track]}</span>
                <strong>${progress}%</strong>
            </div>
        `;
        listContainer.appendChild(item);
    });
}

function filterTraineeList() {
    renderTraineeSelector();
}

function selectTrainee(id) {
    currentTraineeId = id;
    
    // Initialize default checklist tab/category for this trainee's track
    const trainee = database.trainees.find(t => t.id === id);
    if (trainee) {
        const categories = Object.keys(CHECKLIST_TEMPLATES[trainee.track] || {});
        if (categories.length > 0) {
            currentChecklistCategory = categories[0];
        }
    }
    
    renderTraineeSelector();
    renderActiveTraineeChecklist();
}

function setDefaultChecklistCategory() {
    if (database.trainees.length > 0 && currentTraineeId === null) {
        selectTrainee(database.trainees[0].id);
    }
}

function renderActiveTraineeChecklist() {
    const panel = document.getElementById("onboarding-details-panel");
    if (!panel) return;
    
    if (!currentTraineeId) {
        panel.innerHTML = `
            <div class="no-selection-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="empty-icon"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <h3>לא נבחר/ה משתלם/ת</h3>
                <p>אנא בחרי משתלם/ת מהרשימה בצד ימין כדי לצפות בצ'קליסט המיומנויות ובהתקדמות.</p>
            </div>
        `;
        return;
    }
    
    const trainee = database.trainees.find(t => t.id === currentTraineeId);
    if (!trainee) return;
    
    const instructor = database.instructors.find(i => i.id === trainee.instructorId);
    const instructorName = instructor ? instructor.name : "טרם שובצה מדריכה קלינית";
    
    const trackLabels = {
        nurse: "אחות חדשה",
        advanced: "על בסיסי",
        intern: "סטאז'",
        student: "התנסות קצרה"
    };
    
    const progress = calculateTraineeProgress(trainee);
    const template = CHECKLIST_TEMPLATES[trainee.track];
    const categories = Object.keys(template || {});
    
    // If our current category doesn't belong to this track, reset to first category
    if (!categories.includes(currentChecklistCategory) && categories.length > 0) {
        currentChecklistCategory = categories[0];
    }
    
    // Checklist Tab Navigation
    let categoryTabsHtml = "";
    categories.forEach(cat => {
        categoryTabsHtml += `
            <button class="checklist-tab-btn ${cat === currentChecklistCategory ? "active" : ""}" 
                    onclick="setChecklistCategory('${cat}')">${cat}</button>
        `;
    });
    
    // Checklist Items for current category
    let itemsHtml = "";
    const items = template[currentChecklistCategory] || [];
    
    if (items.length === 0) {
        itemsHtml = '<p style="padding:20px; color:var(--neutral-gray);">אין משימות בקטגוריה זו.</p>';
    } else {
        items.forEach(item => {
            const isChecked = trainee.checklist && trainee.checklist[item.id] && trainee.checklist[item.id].checked;
            const signoff = (trainee.checklist && trainee.checklist[item.id]) ? trainee.checklist[item.id] : null;
            
            itemsHtml += `
                <div class="checklist-item ${isChecked ? "checked" : ""}">
                    <div class="custom-checkbox-wrapper">
                        <input type="checkbox" class="custom-checkbox-input" 
                               ${isChecked ? "checked" : ""} 
                               ${currentRole !== "coordinator" ? "disabled" : ""}
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
    
    // Evaluation summary section
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
                    <h3>${trainee.name}</h3>
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
                    ${currentRole !== "coordinator" ? `
                        <div class="insight-info-box" style="margin-bottom: 16px; font-size:0.85rem; padding: 10px 16px;">
                            <span>🔒 סימון מיומנויות ונהלים פתוח לשינוי <strong>לרכזת הדרכה בלבד</strong>. הצוות הכללי יכול לצפות ברשימה ובמצב ההתקדמות.</span>
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

function setChecklistCategory(cat) {
    currentChecklistCategory = cat;
    renderActiveTraineeChecklist();
}

function toggleChecklistItem(itemId, isChecked) {
    if (currentRole !== "coordinator") return;
    
    const trainee = database.trainees.find(t => t.id === currentTraineeId);
    if (!trainee) return;
    
    if (!trainee.checklist) trainee.checklist = {};
    
    if (isChecked) {
        const instructor = database.instructors.find(i => i.id === trainee.instructorId);
        trainee.checklist[itemId] = {
            checked: true,
            signoffDate: new Date().toISOString().split('T')[0],
            instructorName: instructor ? instructor.name : "רכזת הדרכה"
        };
    } else {
        trainee.checklist[itemId] = {
            checked: false
        };
    }
    
    saveToLocalStorage();
    renderAll(); // Re-render to update stats and progress bars everywhere
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
        const traineesTaught = database.trainees.filter(t => t.instructorId === inst.id);
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
}

function deleteInstructor(id) {
    const inst = database.instructors.find(i => i.id === id);
    if (!inst) return;
    
    // Check if currently teaching
    const isTeaching = database.trainees.some(t => t.instructorId === id);
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
function openAddTraineeModal() {
    const select = document.getElementById("trainee-instructor");
    select.innerHTML = '<option value="">ללא מדריכה קלינית מלווה</option>';
    
    database.instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.id;
        option.innerText = inst.name;
        select.appendChild(option);
    });
    
    openModal("modal-add-trainee");
}

function saveTrainee() {
    const name = document.getElementById("trainee-name").value;
    const track = document.getElementById("trainee-track").value;
    const school = document.getElementById("trainee-school").value;
    const instructorId = document.getElementById("trainee-instructor").value;
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
        startDate,
        checklist,
        evaluation: null
    };
    
    database.trainees.push(newTrainee);
    saveToLocalStorage();
    
    // Reset form
    document.getElementById("form-add-trainee").reset();
    document.getElementById("trainee-start-date").value = new Date().toISOString().split('T')[0];
    
    closeModal("modal-add-trainee");
    
    // Select the new trainee in the onboarding list
    currentTraineeId = newTrainee.id;
    
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
    const specialty = document.getElementById("instructor-specialty").value;
    const historyCount = parseInt(document.getElementById("instructor-history").value) || 0;
    
    if (!name) {
        alert("נא להזין את שם המדריכה.");
        return;
    }
    
    const newInstructor = {
        id: "inst-" + Date.now(),
        name,
        specialty,
        historyCount
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
    const specialty = document.getElementById("instructor-specialty").value;
    const historyCount = parseInt(document.getElementById("instructor-history").value) || 0;
    
    if (!name) {
        alert("נא להזין את שם המדריכה.");
        return;
    }
    
    inst.name = name;
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
