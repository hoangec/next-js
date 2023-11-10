def gv
pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices:['1.1.0','1.2.0','2.0.0'], description: '')
        booleanParam(name: 'excuteTest',defaultValue: true, description: '')
    }
    stages {
        stage("init") {
            steps {
                echo "khoi tao"
                script{
                    gv = load "script.groovy"
                }
            }
        }
        stage("build") {
            steps {
                echo "qua trinh cai dat goi"
                script{
                    gv.buildApp()
                }
            }
        }
        stage("test") {
            when   {
                expression{
                    params.excuteTest
                }
            }
            steps {
                echo "cac lenh chat test vi duL npm run test - da chinh sua tu dong"
                script{
                    gv.testApp()
                }
            }
        }
        stage(deloy) {
            steps {
                echo "cac lenh de chay nhu : npm run start"
            }
        }
    }
}