import test from 'node:test';
import assert from 'node:assert/strict';
import { detectIntent, buildReply } from './chat.js';

test('detecta intención de proyectos en mensajes relacionados', () => {
  assert.equal(detectIntent('muéstrame tus proyectos y repositorios'), 'projects');
});

test('responde con información técnica cuando preguntan por tecnologías', () => {
  const reply = buildReply('qué tecnologías usas', 'es');
  assert.match(reply, /React|Node\.js|Python|Power BI|SQL/i);
});

test('responde en inglés cuando el idioma es inglés', () => {
  const reply = buildReply('what projects have you worked on?', 'en');
  assert.match(reply, /projects|development|dashboards|data/i);
});
