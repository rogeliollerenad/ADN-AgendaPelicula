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

    stage('Test') {
      steps {
        sh 'npm run test'
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

    // post {
    //     always {
    //         echo 'This will always run'
    //     }
    //     success {
    //         echo 'This will run only if successful'
    //     }
    //     failure {
    //         echo 'This will run only if failed'
    //     }
    //     unstable {
    //         echo 'This will run only if the run was marked as unstable'
    //     }
    //     changed {
    //         echo 'This will run only if the state of the Pipeline has changed'
    //         echo 'For example, if the Pipeline was previously failing but is now successful'
    //     }
    // }

}