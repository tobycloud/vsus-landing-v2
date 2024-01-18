pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.tobycm.dev/', 'TobyRegistry') {
                        def dockerImage = docker.build("registry.tobycm.dev/vsus-landing-v2", "-f Dockerfile .")
                        dockerImage.push()
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
