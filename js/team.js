const teamMembers = [
    {
        name: 'Babi Sobrinho',
        role: 'Full-Stack Developer',
        photo: 'https://avatars.githubusercontent.com/u/79843387?v=4',
        github: 'https://github.com/babisobrinho',
        testimonial: 'Desenvolver o HemoVida foi desafiador e gratificante. Ver o projeto tomar forma e saber que vai ajudar tantas pessoas é incrível.',
        main_contribution: 'Sistema Completo de Doações',
        contributions: [
            'Arquitetura do projeto',
            'Coordenação da equipa',
            'Integração de sistemas',
            'Liderança técnica'
        ],
        is_leader: true
    },
    {
        name: 'Rebeca Santos',
        role: 'Frontend Developer',
        photo: 'https://avatars.githubusercontent.com/u/195432659?v=4',
        github: 'https://github.com/RebecaSantosb',
        testimonial: 'Criar uma interface intuitiva para um sistema tão importante foi uma responsabilidade enorme e muito gratificante.',
        main_contribution: 'Gestão de Bolsas de Sangue',
        contributions: [
            'Design da interface',
            'Experiência do usuário',
            'Componentes reutilizáveis',
            'Validações de formulário'
        ],
        is_leader: false
    },
    {
        name: 'Juliana Alves',
        role: 'Mobile Developer',
        photo: 'https://avatars.githubusercontent.com/u/197295278?v=4',
        github: 'https://github.com/JulyDuds',
        testimonial: 'Cada linha de código que escrevi tinha um propósito maior: ajudar a salvar vidas. Isso deu um significado especial ao meu trabalho.',
        main_contribution: 'Sistema de Transfusões',
        contributions: [
            'Versão mobile',
            'Testes de usabilidade',
            'Documentação técnica',
            'Integração com APIs'
        ],
        is_leader: false
    },
    {
        name: 'Lenice Soares',
        role: 'Backend Developer',
        photo: 'https://avatars.githubusercontent.com/u/168729483?v=4',
        github: 'https://github.com/lenicesoaares',
        testimonial: 'A estrutura do banco de dados foi cuidadosamente planejada para garantir a segurança e eficiência do sistema de doações.',
        main_contribution: 'Gestão de Hospitais',
        contributions: [
            'API RESTful',
            'Segurança de dados',
            'Otimização de consultas',
            'Migrations e seeders'
        ],
        is_leader: false
    },
    {
        name: 'Aline Armando',
        role: 'Mobile Developer',
        photo: 'https://avatars.githubusercontent.com/u/195438725?v=4',
        github: 'https://github.com/kiamy6',
        testimonial: 'Trabalhar no HemoVida foi uma experiência transformadora. Aprendi muito e pude contribuir para algo realmente importante.',
        main_contribution: 'Exames Clínicos',
        contributions: [
            'App mobile',
            'Notificações',
            'Integração com APIs',
            'Testes automatizados'
        ],
        is_leader: false
    }
];

// Generate contributions cards
const teamContainer = document.getElementById('team-container');
const contributionsHtml = teamMembers.map(member => {
    const contribHtml = member.contributions.map(c => `<li>${c}</li>`).join('');
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-4 text-start">
                    <h4 class="fw-bold">${member.name}</h4>
                    <p class="fw-semibold">${member.main_contribution}</p>
                    <ul class="ps-3 mb-0">${contribHtml}</ul>
                </div>
            </div>
        </div>
    `;
}).join('');

teamContainer.innerHTML = contributionsHtml;

// Generate testimonials cards
const testimonialsContainer = document.getElementById('testimonials-container');
const testimonialsHtml = teamMembers.map(member => {
    return `
        <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-4">
                    <div class="d-flex align-items-center mb-3">
                        <img src="${member.photo}" class="rounded-circle me-3" width="60" height="60" alt="${member.name}" style="object-fit: cover;">
                        <div>
                            <h5 class="fw-bold mb-0">${member.name}</h5>
                            <small class="text-muted">${member.role}</small>
                        </div>
                    </div>
                    <p class="mb-3">"${member.testimonial}"</p>
                    <a href="${member.github}" target="_blank" class="btn btn-sm btn-outline-danger">
                        Perfil
                    </a>
                </div>
            </div>
        </div>
    `;
}).join('');

// Add the feedback card at the end
testimonialsContainer.innerHTML = testimonialsHtml + `
    <div class="col-md-4 mb-4">
        <div class="card border-2 border-danger shadow-sm h-100">
            <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                    <div>
                        <h5 class="fw-bold mb-0">E qual é a tua opinião?</h5>
                        <small class="text-muted">Nós queremos saber!</small>
                    </div>
                </div>
                <p class="mb-3">Se gostaste do nosso projeto, dá a tua opinião no nosso repositório do GitHub! Vamos adorar receber as tuas críticas e saber o que podemos melhorar.</p>
                <a href="https://github.com/babisobrinho/hemovida" target="_blank" class="btn btn-sm btn-outline-danger">
                    Repositório do GitHub
                </a>
            </div>
        </div>
    </div>
`;