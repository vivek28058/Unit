pipeline {
    agent any

    environment {
        SNYK_TOKEN = credentials('snyk-token')   // Replace with your actual credentials ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the GitHub repository
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                // Install Node.js
                script {
                    def nodeVersion = '16'
                    sh "curl -sL https://deb.nodesource.com/setup_${nodeVersion}.x" 
                    sh "apt-get install -y nodejs"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Install Mocha') {
            steps {
                // Install mocha and report generator
                sh 'npm install -g mochawesome mochawesome-report-generator'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run unit tests
                sh 'npm run test:unit'
            }
        }

        stage('Run BDD Tests') {
            steps {
                // Run BDD tests
                sh 'npm run test:bdd'
            }
        }

        stage('Run Snyk to Check for Vulnerabilities') {
            steps {
                // Run Snyk analysis
                script {
                    try {
                        sh "SNYK_TOKEN=${SNYK_TOKEN} snyk test"
                    } catch (Exception e) {
                        echo "Snyk analysis failed but continuing the build"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up or archive artifacts if needed
            archiveArtifacts artifacts: '**/target/**/*', fingerprint: true
            junit '**/test-results/**/*.xml' // Adjust based on your test results path
        }
    }
}
