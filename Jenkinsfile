pipeline {
    agent any

    stages {
        stage('ENVs') {
            steps {
                sh 'env'
            }
        }
        stage('Test') {
            steps {
                sh 'auto/test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'auto/deploy'
            }
        }
    }
}