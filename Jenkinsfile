pipeline {
  agent {
    label 'Slave_Induccion'
  }

  stages {
     
     stage('Install') {
      steps {
        sh 'npm install'
      }
    }  

    

    stage('Checkout'){
      steps{
        checkout([
          $class: 'GitSCM', 
          branches: [[name: '*/main']], 
          doGenerateSubmoduleConfigurations: false, 
          extensions: [], 
          gitTool: 'Default', 
          submoduleCfg: [], 
          userRemoteConfigs: [[
          credentialsId: 'GitHub_rogeliollerena', 
          url:'https://github.com/rogeliollerenad/ADN-AgendaPelicula.git'
          ]]
        ])
      }
    }

    stage('esLint') {
      steps {
        sh 'npm run lint'
      }
    }


    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Test coverage') {
      steps {
        sh 'npm run test:coverage'
      }
    }

    
    

   stage('Build') {
      steps {
        sh 'npm run build'
      }
    }  



    stage('Static Code Analysis') {
      steps{
        echo '------------>Análisis de código estático<------------'
        withSonarQubeEnv('Sonar') {
          sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
        }

      }
   }

  

  }


}