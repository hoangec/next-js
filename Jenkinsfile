pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo "cac lenh build app vi du npm install, npm run build"
            }
        }
        stage("test") {
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