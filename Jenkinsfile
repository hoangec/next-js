pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices:['1.1.0','1.2.0','2.0.0'], description: '')
        booleanParam(name: 'excuteTest',defaultValue: true, description: '')
    }
    stages {
        stage("build") {
            steps {
                echo "qua trinh cai dat goi"
                nodejs('nodejs-18.16') {
                    sh 'npm -v'
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
            }
        }
        stage(deloy) {
            steps {
                echo "cac lenh de chay nhu : npm run start"
            }
        }
    }
}