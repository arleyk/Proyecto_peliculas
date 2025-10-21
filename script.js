// Base de datos de canciones con recomendaciones basadas en aspiraciones y deseos
const songDatabase = {
    // Personas oscuras y sin esperanzas
    dark: {
        survival: {
            isolation: {
                inequality: {
                    title: "My Ordinary Life",
                    artist: "The Living Tombstone",
                    description: "Una reflexión sobre la monotonía de la vida cotidiana y la búsqueda de significado en la rutina.",
                    reason: "Esta canción captura perfectamente la sensación de estar atrapado en una vida ordinaria mientras se busca algo más profundo y significativo."
                },
                corruption: {
                    title: "Hurt",
                    artist: "Johnny Cash",
                    description: "Una interpretación emotiva sobre el dolor, la culpa y la redención.",
                    reason: "Refleja la espiral descendente de la desesperación y cómo las personas pueden perderlo todo, pero también la importancia de la conexión humana."
                },
                environment: {
                    title: "Mad World",
                    artist: "Gary Jules",
                    description: "Una versión melancólica que explora la alienación y la desesperanza en el mundo moderno.",
                    reason: "Representa la lucha por la supervivencia en un mundo sin esperanza, pero también el amor incondicional y la determinación de proteger lo que más importa."
                },
                understanding: {
                    title: "The Sound of Silence",
                    artist: "Simon & Garfunkel",
                    description: "Una reflexión sobre la comunicación perdida y la soledad en la sociedad moderna.",
                    reason: "Demuestra que incluso en los momentos más oscuros de la humanidad, hay personas que eligen hacer el bien y luchar por la justicia."
                }
            },
            failure: {
                inequality: {
                    title: "Creep",
                    artist: "Radiohead",
                    description: "Una canción sobre sentirse fuera de lugar y no pertenecer.",
                    reason: "Explora la alienación urbana y la búsqueda de propósito en una sociedad que parece haber perdido su humanidad."
                },
                corruption: {
                    title: "Boulevard of Broken Dreams",
                    artist: "Green Day",
                    description: "Un himno sobre la soledad y la búsqueda de identidad en un mundo superficial.",
                    reason: "Muestra la rebelión contra un sistema corrupto y la búsqueda de autenticidad en un mundo superficial."
                },
                environment: {
                    title: "Black",
                    artist: "Pearl Jam",
                    description: "Una canción sobre la pérdida y el dolor emocional profundo.",
                    reason: "Explora temas de identidad, soledad y la búsqueda de significado en un mundo tecnológicamente avanzado pero emocionalmente vacío."
                },
                understanding: {
                    title: "My Ordinary Life",
                    artist: "The Living Tombstone",
                    description: "Una reflexión sobre la monotonía de la vida cotidiana y la búsqueda de significado en la rutina.",
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
                    title: "Don't Stop Believin'",
                    artist: "Journey",
                    description: "Un himno sobre mantener la esperanza y perseguir los sueños contra todas las adversidades.",
                    reason: "Demuestra que con determinación y amor, es posible superar cualquier obstáculo y alcanzar la felicidad."
                },
                corruption: {
                    title: "We Are The Champions",
                    artist: "Queen",
                    description: "Una celebración del triunfo sobre la adversidad y la injusticia.",
                    reason: "Muestra cómo una persona común puede hacer una diferencia extraordinaria luchando contra la injusticia."
                },
                environment: {
                    title: "What a Wonderful World",
                    artist: "Louis Armstrong",
                    description: "Una celebración optimista de la belleza del mundo y la vida.",
                    reason: "Inspira a perseguir los sueños y encontrar la belleza en el mundo, incluso en los lugares más inesperados."
                },
                understanding: {
                    title: "Lean on Me",
                    artist: "Bill Withers",
                    description: "Un mensaje sobre la importancia del apoyo mutuo y la amistad.",
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
                    title: "Born to Be Wild",
                    artist: "Steppenwolf",
                    description: "Un himno sobre la libertad y la aventura sin límites.",
                    reason: "Representa la lucha por la libertad y la justicia en un mundo caótico, mostrando que la esperanza puede surgir de los lugares más desesperados."
                },
                corruption: {
                    title: "We Will Rock You",
                    artist: "Queen",
                    description: "Una canción sobre la resistencia y el poder del pueblo.",
                    reason: "Explora la búsqueda de la verdad y la libertad, cuestionando la naturaleza de la realidad y el poder de la elección individual."
                },
                environment: {
                    title: "Eye of the Tiger",
                    artist: "Survivor",
                    description: "Un himno motivacional sobre superar obstáculos y luchar por lo que crees.",
                    reason: "Muestra la importancia de proteger la naturaleza y respetar otras culturas, mientras lucha por la justicia y la libertad."
                },
                understanding: {
                    title: "Don't Stop Me Now",
                    artist: "Queen",
                    description: "Una celebración de la vida y la energía positiva.",
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
                    title: "Imagine",
                    artist: "John Lennon",
                    description: "Una reflexión sobre la paz mundial y la igualdad entre las personas.",
                    reason: "Ofrece una perspectiva contemplativa sobre las grandes preguntas de la vida y la búsqueda de significado en un universo vasto."
                },
                corruption: {
                    title: "The Times They Are A-Changin'",
                    artist: "Bob Dylan",
                    description: "Una canción sobre el cambio social y la lucha contra la corrupción.",
                    reason: "Explora los temas de ambición, corrupción y la búsqueda de significado a través de la contemplación de la naturaleza humana."
                },
                environment: {
                    title: "Big Yellow Taxi",
                    artist: "Joni Mitchell",
                    description: "Una reflexión sobre la destrucción del medio ambiente y la pérdida de la naturaleza.",
                    reason: "Ofrece una experiencia contemplativa profunda sobre la belleza del mundo y nuestra conexión con él."
                },
                understanding: {
                    title: "Bridge Over Troubled Water",
                    artist: "Simon & Garfunkel",
                    description: "Una canción sobre el apoyo emocional y la comprensión mutua.",
                    reason: "Combina la contemplación filosófica con la experiencia de guerra, explorando temas de humanidad, naturaleza y espiritualidad."
                }
            }
        }
    }
};

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

// Función para obtener recomendación de canción basada en las respuestas
function getSongRecommendation(answers) {
    const { personality, aspiration, challenge, fear, change } = answers;
    
    // Buscar en la base de datos de canciones
    if (songDatabase[personality] && 
        songDatabase[personality][challenge] && 
        songDatabase[personality][challenge][fear] && 
        songDatabase[personality][challenge][fear][change]) {
        
        return songDatabase[personality][challenge][fear][change];
    }
    
    // Si no encuentra una combinación específica, usar canciones por defecto basadas en las respuestas
    const defaultSongs = {
        dark: {
            title: "My Ordinary Life",
            artist: "The Living Tombstone",
            description: "Una reflexión sobre la monotonía de la vida cotidiana y la búsqueda de significado en la rutina.",
            reason: "Esta canción captura perfectamente la sensación de estar atrapado en una vida ordinaria mientras se busca algo más profundo y significativo."
        },
        optimistic: {
            title: "Don't Stop Believin'",
            artist: "Journey",
            description: "Un himno sobre mantener la esperanza y perseguir los sueños contra todas las adversidades.",
            reason: "Demuestra que con determinación y amor, es posible superar cualquier obstáculo y alcanzar la felicidad."
        },
        adventurous: {
            title: "Born to Be Wild",
            artist: "Steppenwolf",
            description: "Un himno sobre la libertad y la aventura sin límites.",
            reason: "Representa la lucha por la libertad y la justicia en un mundo caótico, mostrando que la esperanza puede surgir de los lugares más desesperados."
        },
        contemplative: {
            title: "Imagine",
            artist: "John Lennon",
            description: "Una reflexión sobre la paz mundial y la igualdad entre las personas.",
            reason: "Ofrece una perspectiva contemplativa sobre las grandes preguntas de la vida y la búsqueda de significado en un universo vasto."
        }
    };
    
    // Recomendaciones adicionales basadas en las nuevas preguntas
    const additionalSongRecommendations = {
        // Basado en tiempo libre
        solitude: {
            title: "The Sound of Silence",
            artist: "Simon & Garfunkel",
            description: "Una reflexión sobre la comunicación perdida y la soledad en la sociedad moderna.",
            reason: "Explora la soledad moderna y la búsqueda de conexión en un mundo cada vez más digitalizado."
        },
        social: {
            title: "Lean on Me",
            artist: "Bill Withers",
            description: "Un mensaje sobre la importancia del apoyo mutuo y la amistad.",
            reason: "Celebra la amistad y la importancia de las relaciones humanas auténticas, sin importar lo extrañas que puedan ser."
        },
        adventure: {
            title: "Eye of the Tiger",
            artist: "Survivor",
            description: "Un himno motivacional sobre superar obstáculos y luchar por lo que crees.",
            reason: "Inspira a seguir los sueños de aventura y a encontrar la libertad en la naturaleza."
        },
        learning: {
            title: "We Will Rock You",
            artist: "Queen",
            description: "Una canción sobre la resistencia y el poder del pueblo.",
            reason: "Muestra cómo el aprendizaje y el crecimiento personal pueden transformar vidas."
        },
        
        // Basado en valores en relaciones
        loyalty: {
            title: "Bridge Over Troubled Water",
            artist: "Simon & Garfunkel",
            description: "Una canción sobre el apoyo emocional y la comprensión mutua.",
            reason: "Demuestra el poder de la lealtad y la amistad verdadera, incluso en las circunstancias más difíciles."
        },
        growth: {
            title: "What a Wonderful World",
            artist: "Louis Armstrong",
            description: "Una celebración optimista de la belleza del mundo y la vida.",
            reason: "Explora cómo las relaciones pueden ser catalizadores para el crecimiento personal y la autoconciencia."
        },
        freedom: {
            title: "Born to Be Wild",
            artist: "Steppenwolf",
            description: "Un himno sobre la libertad y la aventura sin límites.",
            reason: "Muestra cómo la independencia y la libertad personal pueden ser el camino hacia la sanación."
        },
        understanding: {
            title: "Imagine",
            artist: "John Lennon",
            description: "Una reflexión sobre la paz mundial y la igualdad entre las personas.",
            reason: "Celebra la comprensión mutua y la conexión humana que trasciende las diferencias culturales."
        },
        
        // Basado en filosofía de vida
        carpe_diem: {
            title: "Don't Stop Me Now",
            artist: "Queen",
            description: "Una celebración de la vida y la energía positiva.",
            reason: "Inspira a vivir cada momento con intensidad y a no posponer los sueños para el futuro."
        },
        meaning: {
            title: "The Times They Are A-Changin'",
            artist: "Bob Dylan",
            description: "Una canción sobre el cambio social y la lucha contra la corrupción.",
            reason: "Reflexiona sobre el significado de la existencia y la importancia de encontrar nuestro propósito único."
        },
        balance: {
            title: "What a Wonderful World",
            artist: "Louis Armstrong",
            description: "Una celebración optimista de la belleza del mundo y la vida.",
            reason: "Muestra cómo encontrar el equilibrio entre la rutina y la aventura puede transformar una vida ordinaria."
        },
        impact: {
            title: "We Are The Champions",
            artist: "Queen",
            description: "Una celebración del triunfo sobre la adversidad y la injusticia.",
            reason: "Demuestra cómo pequeños actos de bondad pueden tener un impacto transformador en el mundo."
        }
    };
    
    // Intentar encontrar una recomendación específica basada en las nuevas preguntas
    if (answers.leisure && additionalSongRecommendations[answers.leisure]) {
        return additionalSongRecommendations[answers.leisure];
    }
    if (answers.relationship && additionalSongRecommendations[answers.relationship]) {
        return additionalSongRecommendations[answers.relationship];
    }
    if (answers.philosophy && additionalSongRecommendations[answers.philosophy]) {
        return additionalSongRecommendations[answers.philosophy];
    }
    
    return defaultSongs[personality] || defaultSongs.contemplative;
}

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
    
    // Si no encuentra una combinación específica, usar películas por defecto basadas en las respuestas
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
    
    // Recomendaciones adicionales basadas en las nuevas preguntas
    const additionalRecommendations = {
        // Basado en tiempo libre
        solitude: {
            title: "Her",
            description: "Un hombre solitario desarrolla una relación inusual con un sistema operativo con inteligencia artificial.",
            reason: "Explora la soledad moderna y la búsqueda de conexión en un mundo cada vez más digitalizado."
        },
        social: {
            title: "The Big Lebowski",
            description: "Las aventuras de un desempleado relajado y sus amigos excéntricos en Los Ángeles.",
            reason: "Celebra la amistad y la importancia de las relaciones humanas auténticas, sin importar lo extrañas que puedan ser."
        },
        adventure: {
            title: "Into the Wild",
            description: "Un joven abandona su vida cómoda para vivir en la naturaleza salvaje de Alaska.",
            reason: "Inspira a seguir los sueños de aventura y a encontrar la libertad en la naturaleza."
        },
        learning: {
            title: "Good Will Hunting",
            description: "Un joven genio de clase trabajadora debe decidir entre seguir su corazón o su intelecto.",
            reason: "Muestra cómo el aprendizaje y el crecimiento personal pueden transformar vidas."
        },
        
        // Basado en valores en relaciones
        loyalty: {
            title: "The Shawshank Redemption",
            description: "La amistad entre dos prisioneros que se mantiene a lo largo de décadas.",
            reason: "Demuestra el poder de la lealtad y la amistad verdadera, incluso en las circunstancias más difíciles."
        },
        growth: {
            title: "Eternal Sunshine of the Spotless Mind",
            description: "Una pareja decide borrar sus recuerdos mutuos después de una relación difícil.",
            reason: "Explora cómo las relaciones pueden ser catalizadores para el crecimiento personal y la autoconciencia."
        },
        freedom: {
            title: "Wild",
            description: "Una mujer emprende un viaje de 1,000 millas a pie para sanar después de una pérdida personal.",
            reason: "Muestra cómo la independencia y la libertad personal pueden ser el camino hacia la sanación."
        },
        understanding: {
            title: "Lost in Translation",
            description: "Dos estadounidenses en Tokio forman una conexión profunda a pesar de las barreras culturales.",
            reason: "Celebra la comprensión mutua y la conexión humana que trasciende las diferencias culturales."
        },
        
        // Basado en filosofía de vida
        carpe_diem: {
            title: "Dead Poets Society",
            description: "Un profesor inspirador enseña a sus estudiantes a aprovechar el día y seguir sus pasiones.",
            reason: "Inspira a vivir cada momento con intensidad y a no posponer los sueños para el futuro."
        },
        meaning: {
            title: "Soul",
            description: "Un músico de jazz explora el verdadero propósito de la vida y lo que nos hace humanos.",
            reason: "Reflexiona sobre el significado de la existencia y la importancia de encontrar nuestro propósito único."
        },
        balance: {
            title: "The Secret Life of Walter Mitty",
            description: "Un empleado de revista sale de su zona de confort para vivir aventuras extraordinarias.",
            reason: "Muestra cómo encontrar el equilibrio entre la rutina y la aventura puede transformar una vida ordinaria."
        },
        impact: {
            title: "Pay It Forward",
            description: "Un niño crea un movimiento de bondad que se extiende por todo el país.",
            reason: "Demuestra cómo pequeños actos de bondad pueden tener un impacto transformador en el mundo."
        }
    };
    
    // Intentar encontrar una recomendación específica basada en las nuevas preguntas
    if (answers.leisure && additionalRecommendations[answers.leisure]) {
        return additionalRecommendations[answers.leisure];
    }
    if (answers.relationship && additionalRecommendations[answers.relationship]) {
        return additionalRecommendations[answers.relationship];
    }
    if (answers.philosophy && additionalRecommendations[answers.philosophy]) {
        return additionalRecommendations[answers.philosophy];
    }
    
    return defaultMovies[personality] || defaultMovies.contemplative;
}

// Función para guardar recomendaciones de música en localStorage
function saveSongRecommendation(song) {
    let recommendations = JSON.parse(localStorage.getItem('songRecommendations') || '[]');
    
    const newRecommendation = {
        ...song,
        date: new Date().toLocaleDateString('es-ES'),
        id: Date.now()
    };
    
    recommendations.unshift(newRecommendation); // Agregar al inicio
    localStorage.setItem('songRecommendations', JSON.stringify(recommendations));
}

// Función para cargar recomendaciones de música desde localStorage
function loadSongRecommendations() {
    const recommendations = JSON.parse(localStorage.getItem('songRecommendations') || '[]');
    const container = document.getElementById('songRecommendationsList');
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p class="no-recommendations">Aún no tienes recomendaciones de música guardadas. ¡Completa el cuestionario para obtener tu primera recomendación!</p>';
        return;
    }
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card" data-id="${rec.id}">
            <h4>${rec.title}</h4>
            <p class="song-artist">por ${rec.artist}</p>
            <p>${rec.description}</p>
            <p><strong>¿Por qué esta canción?</strong> ${rec.reason}</p>
            <p class="recommendation-date">Recomendada el ${rec.date}</p>
            <button class="delete-rec-btn" data-id="${rec.id}">Borrar</button>
        </div>
    `).join('');
    
    // Enlazar botones de borrado individual
    container.querySelectorAll('.delete-rec-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            deleteSongRecommendationById(id);
        });
    });
}

// Borrar recomendación de música por id
function deleteSongRecommendationById(id) {
    const recommendations = JSON.parse(localStorage.getItem('songRecommendations') || '[]');
    const filtered = recommendations.filter(r => String(r.id) !== String(id));
    localStorage.setItem('songRecommendations', JSON.stringify(filtered));
    loadSongRecommendations();
}

// Borrar todas las recomendaciones de música
function clearAllSongRecommendations() {
    localStorage.removeItem('songRecommendations');
    loadSongRecommendations();
}

// Función para guardar película creada en localStorage
function saveCreatedMovie(movie) {
    let createdMovies = JSON.parse(localStorage.getItem('createdMovies') || '[]');
    
    const newMovie = {
        ...movie,
        date: new Date().toLocaleDateString('es-ES'),
        id: Date.now()
    };
    
    createdMovies.unshift(newMovie); // Agregar al inicio
    localStorage.setItem('createdMovies', JSON.stringify(createdMovies));
}

// Función para cargar películas creadas desde localStorage
function loadCreatedMovies() {
    const createdMovies = JSON.parse(localStorage.getItem('createdMovies') || '[]');
    const container = document.getElementById('createdMoviesList');
    
    if (createdMovies.length === 0) {
        container.innerHTML = '<p class="no-recommendations">Aún no has creado ninguna película. ¡Comienza a diseñar tu primera película mental!</p>';
        return;
    }
    
    container.innerHTML = createdMovies.map(movie => `
        <div class="recommendation-card" data-id="${movie.id}">
            <h4>${movie.title}</h4>
            <p><strong>Género:</strong> ${movie.genre}</p>
            <p><strong>Trama:</strong> ${movie.theme}</p>
            <p><strong>Meta:</strong> ${movie.goal}</p>
            <p><strong>Inspiración:</strong> ${movie.inspiration}</p>
            <p><strong>Mensaje:</strong> ${movie.message}</p>
            <p><strong>Final:</strong> ${movie.ending}</p>
            <p class="recommendation-date">Creada el ${movie.date}</p>
            <button class="delete-rec-btn" data-id="${movie.id}">Borrar</button>
        </div>
    `).join('');
    
    // Enlazar botones de borrado individual
    container.querySelectorAll('.delete-rec-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            deleteCreatedMovieById(id);
        });
    });
}

// Borrar película creada por id
function deleteCreatedMovieById(id) {
    const createdMovies = JSON.parse(localStorage.getItem('createdMovies') || '[]');
    const filtered = createdMovies.filter(m => String(m.id) !== String(id));
    localStorage.setItem('createdMovies', JSON.stringify(filtered));
    loadCreatedMovies();
}

// Borrar todas las películas creadas
function clearAllCreatedMovies() {
    localStorage.removeItem('createdMovies');
    loadCreatedMovies();
}

// Función para procesar el formulario de creación de película
function handleMovieCreation(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const movieData = {
        title: formData.get('movieTitle'),
        genre: formData.get('movieGenre'),
        theme: formData.get('movieTheme'),
        goal: formData.get('movieGoal'),
        inspiration: formData.get('movieInspiration'),
        message: formData.get('movieMessage'),
        ending: formData.get('movieEnding')
    };
    
    // Mostrar la película creada
    document.getElementById('createdMovieTitle').textContent = movieData.title;
    document.getElementById('createdMovieGenre').textContent = movieData.genre;
    document.getElementById('createdMovieTheme').textContent = movieData.theme;
    document.getElementById('createdMovieGoal').textContent = movieData.goal;
    document.getElementById('createdMovieInspiration').textContent = movieData.inspiration;
    document.getElementById('createdMovieMessage').textContent = movieData.message;
    document.getElementById('createdMovieEnding').textContent = movieData.ending;
    
    // Mostrar el resultado
    document.getElementById('movieResult').classList.remove('hidden');
    
    // Scroll al resultado
    document.getElementById('movieResult').scrollIntoView({ behavior: 'smooth' });
    
    // Guardar la película creada en una variable global para poder guardarla después
    window.currentCreatedMovie = movieData;
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
        loadSongRecommendations();
    }
    
    // Si es la sección de creación de películas, cargar las películas creadas
    if (sectionName === 'create-movie') {
        loadCreatedMovies();
    }
}

// Variables globales para el slider
let currentSlideIndex = 0;
let currentQuestionIndex = 0;
const totalSlides = 5;
const totalQuestions = 8;

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
    const questionNames = ['personality', 'aspiration', 'challenge', 'fear', 'change', 'leisure', 'relationship', 'philosophy'];
    
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
    
    // Obtener recomendaciones
    const movieRecommendation = getMovieRecommendation(answers);
    const songRecommendation = getSongRecommendation(answers);
    
    // Mostrar resultado de película
    document.getElementById('movieTitle').textContent = movieRecommendation.title;
    document.getElementById('movieDescription').textContent = movieRecommendation.description;
    document.getElementById('movieReason').textContent = movieRecommendation.reason;
    
    // Mostrar resultado de canción
    document.getElementById('songTitle').textContent = songRecommendation.title;
    document.getElementById('songArtist').textContent = songRecommendation.artist;
    document.getElementById('songDescription').textContent = songRecommendation.description;
    document.getElementById('songReason').textContent = songRecommendation.reason;
    
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
    
    // Botón guardar recomendación de película
    document.getElementById('saveRecommendation').addEventListener('click', function() {
        const movie = {
            title: document.getElementById('movieTitle').textContent,
            description: document.getElementById('movieDescription').textContent,
            reason: document.getElementById('movieReason').textContent
        };
        
        saveRecommendation(movie);
        
        // Mostrar confirmación
        this.textContent = '¡Película Guardada!';
        this.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
        
        setTimeout(() => {
            this.textContent = 'Guardar Película';
            this.style.background = 'linear-gradient(135deg, #4682b4 0%, #1e3c72 100%)';
        }, 2000);
    });
    
    // Botón guardar recomendación de música
    document.getElementById('saveSongRecommendation').addEventListener('click', function() {
        const song = {
            title: document.getElementById('songTitle').textContent,
            artist: document.getElementById('songArtist').textContent,
            description: document.getElementById('songDescription').textContent,
            reason: document.getElementById('songReason').textContent
        };
        
        saveSongRecommendation(song);
        
        // Mostrar confirmación
        this.textContent = '¡Canción Guardada!';
        this.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
        
        setTimeout(() => {
            this.textContent = 'Guardar Canción';
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
        loadSongRecommendations();
    }
    
    // Botón borrar todas las recomendaciones de películas
    const clearBtn = document.getElementById('clearRecommendations');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('¿Seguro que deseas borrar todas las recomendaciones de películas?')) {
                localStorage.removeItem('movieRecommendations');
                loadRecommendations();
            }
        });
    }
    
    // Botón borrar todas las recomendaciones de música
    const clearSongBtn = document.getElementById('clearSongRecommendations');
    if (clearSongBtn) {
        clearSongBtn.addEventListener('click', function() {
            if (confirm('¿Seguro que deseas borrar todas las recomendaciones de música?')) {
                clearAllSongRecommendations();
            }
        });
    }
    
    // Formulario de creación de película
    const movieCreationForm = document.getElementById('movieCreationForm');
    if (movieCreationForm) {
        movieCreationForm.addEventListener('submit', handleMovieCreation);
    }
    
    // Botón guardar película creada
    const saveCreatedMovieBtn = document.getElementById('saveCreatedMovie');
    if (saveCreatedMovieBtn) {
        saveCreatedMovieBtn.addEventListener('click', function() {
            if (window.currentCreatedMovie) {
                saveCreatedMovie(window.currentCreatedMovie);
                
                // Mostrar confirmación
                this.innerHTML = '<span>💾 ¡Película Guardada!</span>';
                this.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
                
                setTimeout(() => {
                    this.innerHTML = '<span>💾 Guardar Película</span>';
                    this.style.background = '';
                }, 2000);
                
                // Recargar la lista de películas creadas
                loadCreatedMovies();
            }
        });
    }
    
    // Botón crear otra película
    const createAnotherMovieBtn = document.getElementById('createAnotherMovie');
    if (createAnotherMovieBtn) {
        createAnotherMovieBtn.addEventListener('click', function() {
            // Limpiar el formulario
            document.getElementById('movieCreationForm').reset();
            
            // Ocultar el resultado
            document.getElementById('movieResult').classList.add('hidden');
            
            // Scroll al formulario
            document.getElementById('movieCreationForm').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Botón borrar todas las películas creadas
    const clearCreatedMoviesBtn = document.getElementById('clearCreatedMovies');
    if (clearCreatedMoviesBtn) {
        clearCreatedMoviesBtn.addEventListener('click', function() {
            if (confirm('¿Seguro que deseas borrar todas tus películas creadas?')) {
                clearAllCreatedMovies();
            }
        });
    }
});

