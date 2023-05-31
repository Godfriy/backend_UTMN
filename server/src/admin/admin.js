const { config } = require("dotenv");
const uploadFileFeature = require("@adminjs/upload");
const AdminBro = require("adminjs");
const AdminBroExpress = require("@adminjs/express");
const AdminBroMongoose = require("@adminjs/mongoose");
const bcrypt = require("bcrypt");
const modelsMongoose = require("../models/index.js");
const ContentProvider = require("./providers/ContentProvider.js");
config();

const {
    Students,
    Docs,
    EntryDocs,
    Groups,
    StudentGroups,
    PrepDirs,
    StudentJobs,
    Companies,
} = modelsMongoose;

AdminBro.registerAdapter(AdminBroMongoose);

const studentProvider = new ContentProvider("static", "static/students");
const docScanProvider = new ContentProvider("static", "static/docs/scans");
const docEntryProvider = new ContentProvider("static", "static/docs/entry");

const menu = {
    students:    { name: "Студенты",        icon: "Education" },
    group:       { name: "Группы",          icon: "Group" },
    docs:        { name: "Документы",       icon: "Document" },
    work:        { name: "Работа",          icon: "Enterprise" }
}

const adminBro = new AdminBro({
    resources: [
        {
            resource: Students,
            options: {
                parent: menu.students,
                properties: {
                    _id: {isVisible: false},
                    fio: {isTitle: true}
                }
            },
            features: [
                uploadFileFeature({
                    provider: studentProvider,
                    properties: {
                        filePath: "photo.filePath",
                        filename: "photo.filename",
                        file: "photo",
                        filesToDelete: "photo.filesToDelete",
                        key: "photo.path",
                    },
                    validation: {
                        mimeTypes: ['image/png', 'image/jpeg', 'image/jpg']
                    }
                }),
            ]
        },
        {
            resource: Docs,
            options: {
                parent: menu.docs,
                properties: {
                    _id: {isVisible: false},
                    studentId: {isTitle: true},
                }
            },
            features: [
                uploadFileFeature({
                    provider: docScanProvider,
                    properties: {
                        filePath: "docScan.filePath",
                        filename: "docScan.filename",
                        file: "docScan",
                        filesToDelete: "docScan.filesToDelete",
                        key: "docScan.path",
                    },
                    validation: {
                        mimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                    }
                }),
            ]
        },
        {
            resource: EntryDocs,
            options: {
                parent: menu.docs,
                properties: {
                    _id: {isVisible: false},
                    studentId: {isTitle: true},
                }
            },
            features: [
                uploadFileFeature({
                    provider: docEntryProvider,
                    properties: {
                        filePath: "form.filePath",
                        filename: "form.filename",
                        file: "form",
                        filesToDelete: "form.filesToDelete",
                        key: "form.path",
                    },
                    validation: {
                        mimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                    }
                }),
            ]
        },
        {
            resource: Groups,
            options: {
                parent: menu.group,
                properties: {
                    _id: {isVisible: false},
                    groupName: {isTitle: true},
                }
            }
        },
        {
            resource: StudentGroups,
            options: {
                parent: menu.group,
                properties: {
                    _id: {isVisible: false},
                    studentId: {isTitle: true}
                }
            }
        },
        {
            resource: PrepDirs,
            options: {
                parent: menu.group,
                properties: {
                    _id: {isVisible: false},
                    title: {isTitle: true}
                }
            }
        },
        {
            resource: StudentJobs,
            options: {
                parent: menu.work,
                properties: {
                    _id: {isVisible: false},
                    studentId: {isTitle: true},
                }
            }
        },
        {
            resource: Companies,
            options: {
                parent: menu.work,
                properties: {
                    _id: {isVisible: false},
                    compName: {isTitle: true}
                }
            }
        },        
    ],
    locale: {
        translations: {
            labels: {
                Students: 'Студенты',
                Docs: "Документы",
                EntryDocs: "Вступительные документы",
                Groups: "Учебные группы",
                StudentGroups: "Студенты по группам",
                PrepDirs: "Направления подготовки",
                StudentJobs: "Студенты и работа",
                Companies: "Компании-партнёры",
            },
            resources: {
                Students: {
                    properties: {
                        fio: "ФИО",
                        birthDate: "Дата рождения",
                        currAdd: "Адрес",
                        phoneNum: "Телефонные номера",
                        photo: "Фото",
                        email: "Почта",
                        status: "Статус",
                    }
                },
                Docs: {
                    properties: {
                        studentId: 'Студент',
                        docType: 'Тип документа',
                        docNum: 'Номер документа',
                        docScan: 'Скан документа',
                    }
                },
                EntryDocs: {
                    properties: {
                        studentId: 'Студент',
                        form: 'Скан анкеты',
                        testRes: 'Баллы за тест'
                    }
                },
                Groups: {
                    properties: {
                        groupName: 'Название группы',
                        prepDir: 'Направление подготовки',
                        entryYear: 'Год поступления',
                    }
                },
                StudentGroups: {
                    properties: {
                        studentId: 'Студент',
                        groupId: 'Учебная группа',
                        entryDate: 'Дата поступления',
                    }
                },
                PrepDirs: {
                    properties: {
                        title: 'Полное название направления',
                        dirCode: 'Код направления',
                        fgos: 'Направление подготовки (ФГОС)',
                        profile: 'Профиль',
                    }
                },
                Companies: {
                    properties: {
                        compName: 'Название компании',
                        legAddress: 'Юридический адрес',
                        compEmail: 'Почта компании',
                        compPhone: 'Номер компании',
                    }
                },
                StudentJobs: {
                    properties: {
                        studentId: 'Студент',
                        startDate: 'Дата начала',
                        endDate: 'Дата окончания',
                        post: 'Должность',
                        companyId: 'Компания',
                    }
                }
            },
        },
    },
    rootPath: "/admin",
    branding: {
        companyName: "Админ панель ТюмГУ",
        softwareBrothers: false,
    },
});

const routerAdmin = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
        cookieName: "admin-bro",
        cookiePassword: "superlongandcomplicatedname",
        authenticate: async (email, password) => {
            if (!email || !password) {
                return false;
            }
            if (
                email === process.env.MAIL_USER &&
                password === process.env.MAIL_PASSWORD
            ) {
                return true;
            }
            return false;
        },
    },
    null,
    {
        resave: false,
        saveUninitialized: true,
    }
);

module.exports = { adminBro, routerAdmin };
