<template>
  <section class="card projects expanded">
    <h2><i class="fas fa-project-diagram"></i> Projects</h2>
    <div class="project-item">
        <h3>Personal Portfolio (AI Enthusiast Project)</h3>
        <p>This webpage is a personal portfolio showcasing my skills and professional experience. Built on <strong>Vue.js</strong> for a responsive and modular frontend, utilizing <strong>Cursor AI</strong> for rapid development and code refinement, and managed deployment workflows with <strong>Git</strong> and GitHub Pages.</p>
        <div class="project-tech">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Cursor AI</span>
            <span class="tech-tag">Git</span>
            <span class="tech-tag">GitHub Pages</span>
            <span class="tech-tag">Frontend Development</span>
        </div>
    </div>
  

    <div class="project-item">
        <h3>Retail Data Lake Analytics (AWS)</h3>
        <p>Designed and implemented a <strong>data lake</strong> using <strong>AWS S3</strong> for centralized storage (raw CSV and optimized Parquet). Built <strong>ETL pipelines with AWS Glue</strong> to transform data, resulting in a <strong>~90% reduction</strong> in storage size and improved query performance. Used <strong>Glue Crawler</strong> for metadata and <strong>Athena</strong> for efficient querying, delivering <strong>QuickSight</strong> dashboards for real-time analytics.</p>
        <div class="project-tech">
            <span class="tech-tag">AWS S3</span>
            <span class="tech-tag">AWS Glue</span>
            <span class="tech-tag">AWS Athena</span>
            <span class="tech-tag">AWS QuickSight</span>
            <span class="tech-tag">ETL</span>
            <span class="tech-tag">Parquet</span>
            <span class="tech-tag">Data Lake</span>
        </div>
    </div>

    <div class="project-item">
        <h3>Serverless Employee Management System</h3>
        <p>Built a robust system using <strong>AWS serverless components</strong> and <strong>Terraform</strong>. Refactored the Node.js backend into a <strong>microservices architecture</strong> using <strong>AWS Lambda</strong> and <strong>API Gateway</strong>. Developed a responsive frontend (HTML/CSS/JS) and integrated <strong>AWS SES</strong> for automated email notifications, ensuring smooth operation through <strong>Postman</strong> testing.</p>
        <div class="project-tech">
            <span class="tech-tag">AWS Lambda</span>
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">AWS SES</span>
            <span class="tech-tag">Microservices</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">API Gateway</span>
            <span class="tech-tag">Postman</span>
        </div>
    </div>

    <div class="project-item">
        <h3>Forest Management System</h3>
        <p>Designed and built a <strong>layered-architecture</strong> application focused on <strong>scalability and maintainability</strong>. Developed robust <strong>RESTful APIs</strong> and intuitive front-end UIs, enhancing user experience. Executed comprehensive <strong>API testing with Postman</strong> to ensure high quality before deployment.</p>
        <div class="project-tech">
            <span class="tech-tag">RESTful APIs</span>
            <span class="tech-tag">Layered Architecture</span>
            <span class="tech-tag">Front-end UI</span>
            <span class="tech-tag">Postman</span>
            <span class="tech-tag">Scalability</span>
        </div>
    </div>

    <div class="project-item">
        <h3>Robot Movement Control System</h3>
        <p>Developed an award-winning control system using <strong>C++ and OOP</strong>. Integrated <strong>speech-to-text conversion</strong> and <strong>Bluetooth communication</strong> to enable precise control (forward, backward, left, right) of a robot car. Designed <strong>OOP classes</strong> for motors, wheels, and sensors. Recognized as the <strong>Best Innovative Project</strong>.</p>
        <div class="project-tech">
            <span class="tech-tag">C++</span>
            <span class="tech-tag">OOP</span>
            <span class="tech-tag">Robotics</span>
            <span class="tech-tag">Bluetooth</span>
            <span class="tech-tag">Speech-to-Text</span>
        </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>