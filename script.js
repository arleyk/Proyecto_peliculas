// Base de datos de películas con recomendaciones basadas en aspiraciones y deseos
const movieDatabase = {
    // Personas oscuras y sin esperanzas
    dark: {
        survival: {
            isolation: {
                inequality: {
                    title: "El Pianista",
                    description: "La historia de un pianista judío que sobrevive al Holocausto en Varsovia, mostrando la resistencia humana ante la adversidad extrema.",
                    reason: "Esta película refleja la lucha por sobrevivir en las condiciones más oscuras, mostrando cómo incluso en la desesperación más profunda, el arte y la humanidad pueden persistir."
                },
                corruption: {
                    title: "Requiem for a Dream",
                    description: "Un retrato crudo de la adicción y la desesperación en la sociedad moderna.",
                    reason: "Muestra la espiral descendente de la desesperanza y cómo las personas pueden perderlo todo, pero también la importancia de la conexión humana."
                },
                environment: {
                    title: "The Road",
                    description: "Un padre y su hijo viajan por un mundo post-apocalíptico devastado, luchando por sobrevivir.",
                    reason: "Representa la lucha por la supervivencia en un mundo sin esperanza, pero también el amor incondicional y la determinación de proteger lo que más importa."
                },
                understanding: {
                    title: "Schindler's List",
                    description: "La historia real de Oskar Schindler, quien salvó a más de mil judíos durante el Holocausto.",
                    reason: "Demuestra que incluso en los momentos más oscuros de la humanidad, hay personas que eligen hacer el bien y luchar por la justicia."
                }
            },
            failure: {
                inequality: {
                    title: "Taxi Driver",
                    description: "Un veterano de Vietnam solitario que se convierte en taxista nocturno en Nueva York.",
                    reason: "Explora la alienación urbana y la búsqueda de propósito en una sociedad que parece haber perdido su humanidad."
                },
                corruption: {
                    title: "Fight Club",
                    description: "Un oficinista insomne forma un club de lucha clandestino como forma de rebelión contra la sociedad consumista.",
                    reason: "Muestra la rebelión contra un sistema corrupto y la búsqueda de autenticidad en un mundo superficial."
                },
                environment: {
                    title: "Blade Runner 2049",
                    description: "Un replicante busca respuestas sobre su identidad en un mundo distópico.",
                    reason: "Explora temas de identidad, soledad y la búsqueda de significado en un mundo tecnológicamente avanzado pero emocionalmente vacío."
                },
                understanding: {
                    title: "The Machinist",
                    description: "Un trabajador industrial que sufre de insomnio extremo comienza a cuestionar su realidad.",
                    reason: "Muestra cómo la culpa y la desesperación pueden distorsionar la percepción de la realidad y la necesidad de redención."
                }
            }
        }
    },
    
    // Personas optimistas
    optimistic: {
        intellectual: {
            love: {
                inequality: {
                    title: "The Pursuit of Happyness",
                    description: "Un padre soltero lucha por darle una mejor vida a su hijo mientras persigue sus sueños.",
                    reason: "Demuestra que con determinación y amor, es posible superar cualquier obstáculo y alcanzar la felicidad."
                },
                corruption: {
                    title: "Erin Brockovich",
                    description: "Una madre soltera se convierte en activista ambiental y lucha contra una corporación corrupta.",
                    reason: "Muestra cómo una persona común puede hacer una diferencia extraordinaria luchando contra la injusticia."
                },
                environment: {
                    title: "The Secret Life of Walter Mitty",
                    description: "Un empleado de revista sale de su zona de confort para vivir aventuras extraordinarias.",
                    reason: "Inspira a perseguir los sueños y encontrar la belleza en el mundo, incluso en los lugares más inesperados."
                },
                understanding: {
                    title: "The Intouchables",
                    description: "La amistad entre un millonario tetrapléjico y su cuidador de un barrio marginal.",
                    reason: "Demuestra cómo las diferencias culturales y sociales pueden convertirse en la base de amistades profundas y transformadoras."
                }
            }
        }
    },
    
    // Personas aventureras
    adventurous: {
        survival: {
            freedom: {
                inequality: {
                    title: "Mad Max: Fury Road",
                    description: "En un mundo post-apocalíptico, Max ayuda a Furiosa a liberar a un grupo de mujeres esclavizadas.",
                    reason: "Representa la lucha por la libertad y la justicia en un mundo caótico, mostrando que la esperanza puede surgir de los lugares más desesperados."
                },
                corruption: {
                    title: "The Matrix",
                    description: "Un programador descubre que la realidad es una simulación y se une a la resistencia.",
                    reason: "Explora la búsqueda de la verdad y la libertad, cuestionando la naturaleza de la realidad y el poder de la elección individual."
                },
                environment: {
                    title: "Avatar",
                    description: "Un marine parapléjico se infiltra en una misión en el planeta Pandora y se enamora de su cultura.",
                    reason: "Muestra la importancia de proteger la naturaleza y respetar otras culturas, mientras lucha por la justicia y la libertad."
                },
                understanding: {
                    title: "Interstellar",
                    description: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
                    reason: "Combina la aventura espacial con temas profundos sobre el amor, la familia y la supervivencia de la humanidad."
                }
            }
        }
    },
    
    // Personas contemplativas
    contemplative: {
        intellectual: {
            meaninglessness: {
                inequality: {
                    title: "The Tree of Life",
                    description: "Una reflexión poética sobre la vida, la muerte y el significado de la existencia.",
                    reason: "Ofrece una perspectiva contemplativa sobre las grandes preguntas de la vida y la búsqueda de significado en un universo vasto."
                },
                corruption: {
                    title: "There Will Be Blood",
                    description: "La historia de un magnate del petróleo obsesionado con el poder y la riqueza.",
                    reason: "Explora los temas de ambición, corrupción y la búsqueda de significado a través de la contemplación de la naturaleza humana."
                },
                environment: {
                    title: "Baraka",
                    description: "Un documental sin palabras que explora la relación entre la humanidad y la naturaleza.",
                    reason: "Ofrece una experiencia contemplativa profunda sobre la belleza del mundo y nuestra conexión con él."
                },
                understanding: {
                    title: "The Thin Red Line",
                    description: "Una meditación sobre la guerra, la naturaleza humana y la búsqueda de paz interior.",
                    reason: "Combina la contemplación filosófica con la experiencia de guerra, explorando temas de humanidad, naturaleza y espiritualidad."
                }
            }
        }
    }
};

// Función para obtener recomendación basada en las respuestas
function getMovieRecommendation(answers) {
    const { personality, aspiration, challenge, fear, change } = answers;
    
    // Buscar en la base de datos
    if (movieDatabase[personality] && 
        movieDatabase[personality][challenge] && 
        movieDatabase[personality][challenge][fear] && 
        movieDatabase[personality][challenge][fear][change]) {
        
        return movieDatabase[personality][challenge][fear][change];
    }
    
    // Si no encuentra una combinación específica, usar películas por defecto
    const defaultMovies = {
        dark: {
            title: "El Pianista",
            description: "La historia de un pianista judío que sobrevive al Holocausto en Varsovia, mostrando la resistencia humana ante la adversidad extrema.",
            reason: "Esta película refleja la lucha por sobrevivir en las condiciones más oscuras, mostrando cómo incluso en la desesperación más profunda, el arte y la humanidad pueden persistir."
        },
        optimistic: {
            title: "The Pursuit of Happyness",
            description: "Un padre soltero lucha por darle una mejor vida a su hijo mientras persigue sus sueños.",
            reason: "Demuestra que con determinación y amor, es posible superar cualquier obstáculo y alcanzar la felicidad."
        },
        adventurous: {
            title: "The Matrix",
            description: "Un programador descubre que la realidad es una simulación y se une a la resistencia.",
            reason: "Explora la búsqueda de la verdad y la libertad, cuestionando la naturaleza de la realidad y el poder de la elección individual."
        },
        contemplative: {
            title: "The Tree of Life",
            description: "Una reflexión poética sobre la vida, la muerte y el significado de la existencia.",
            reason: "Ofrece una perspectiva contemplativa sobre las grandes preguntas de la vida y la búsqueda de significado en un universo vasto."
        }
    };
    
    return defaultMovies[personality] || defaultMovies.contemplative;
}

// Función para guardar recomendaciones en localStorage
function saveRecommendation(movie) {
    let recommendations = JSON.parse(localStorage.getItem('movieRecommendations') || '[]');
    
    const newRecommendation = {
        ...movie,
        date: new Date().toLocaleDateString('es-ES'),
        id: Date.now()
    };
    
    recommendations.unshift(newRecommendation); // Agregar al inicio
    localStorage.setItem('movieRecommendations', JSON.stringify(recommendations));
}

// Función para cargar recomendaciones desde localStorage
function loadRecommendations() {
    const recommendations = JSON.parse(localStorage.getItem('movieRecommendations') || '[]');
    const container = document.getElementById('recommendationsList');
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p class="no-recommendations">Aún no tienes recomendaciones guardadas. ¡Completa el cuestionario para obtener tu primera recomendación!</p>';
        return;
    }
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card">
            <h4>${rec.title}</h4>
            <p>${rec.description}</p>
            <p><strong>¿Por qué esta película?</strong> ${rec.reason}</p>
            <p class="recommendation-date">Recomendada el ${rec.date}</p>
        </div>
    `).join('');
}

// Función para cambiar de sección
function showSection(sectionName) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionName).classList.add('active');
    
    // Actualizar navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    
    // Si es la sección de recomendaciones, cargar las recomendaciones
    if (sectionName === 'recommendations') {
        loadRecommendations();
    }
}

// Variables globales para el slider
let currentSlideIndex = 0;
let currentQuestionIndex = 0;
const totalSlides = 5;
const totalQuestions = 5;

// Funciones del slider de películas
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remover clase active del slide actual
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // Calcular nuevo índice
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // Agregar clase active al nuevo slide
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remover clase active del slide actual
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // Establecer nuevo índice
    currentSlideIndex = index - 1;
    
    // Agregar clase active al nuevo slide
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Funciones del cuestionario interactivo
function changeQuestion(direction) {
    const questions = document.querySelectorAll('.question-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Verificar si la pregunta actual tiene respuesta
    if (direction === 1) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
        if (!selectedOption) {
            alert('Por favor, selecciona una opción antes de continuar.');
            return;
        }
    }
    
    // Remover clase active de la pregunta actual
    questions[currentQuestionIndex].classList.remove('active');
    
    // Calcular nuevo índice
    currentQuestionIndex += direction;
    
    // Agregar clase active a la nueva pregunta
    questions[currentQuestionIndex].classList.add('active');
    
    // Actualizar barra de progreso
    updateProgressBar();
    
    // Actualizar botones de navegación
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function submitQuiz() {
    const currentQuestion = document.querySelectorAll('.question-slide')[currentQuestionIndex];
    const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
    
    if (!selectedOption) {
        alert('Por favor, selecciona una opción antes de continuar.');
        return;
    }
    
    // Recopilar todas las respuestas
    const answers = {};
    const questionNames = ['personality', 'aspiration', 'challenge', 'fear', 'change'];
    
    questionNames.forEach(name => {
        const input = document.querySelector(`input[name="${name}"]:checked`);
        if (input) {
            answers[name] = input.value;
        }
    });
    
    // Verificar que todas las preguntas estén respondidas
    const missingFields = questionNames.filter(field => !answers[field]);
    
    if (missingFields.length > 0) {
        alert('Por favor, responde todas las preguntas antes de continuar.');
        return;
    }
    
    // Obtener recomendación
    const recommendation = getMovieRecommendation(answers);
    
    // Mostrar resultado
    document.getElementById('movieTitle').textContent = recommendation.title;
    document.getElementById('movieDescription').textContent = recommendation.description;
    document.getElementById('movieReason').textContent = recommendation.reason;
    
    document.getElementById('result').classList.remove('hidden');
    
    // Scroll al resultado
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// Auto-slide para el slider de películas
function startAutoSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambiar cada 5 segundos
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
    
    // Botón guardar recomendación
    document.getElementById('saveRecommendation').addEventListener('click', function() {
        const movie = {
            title: document.getElementById('movieTitle').textContent,
            description: document.getElementById('movieDescription').textContent,
            reason: document.getElementById('movieReason').textContent
        };
        
        saveRecommendation(movie);
        
        // Mostrar confirmación
        this.textContent = '¡Guardada!';
        this.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
        
        setTimeout(() => {
            this.textContent = 'Guardar Recomendación';
            this.style.background = 'linear-gradient(135deg, #4682b4 0%, #1e3c72 100%)';
        }, 2000);
    });
    
    // Inicializar barra de progreso
    updateProgressBar();
    
    // Iniciar auto-slide para películas
    startAutoSlide();
    
    // Cargar recomendaciones al inicio si estamos en esa sección
    if (document.getElementById('recommendations').classList.contains('active')) {
        loadRecommendations();
    }
});

