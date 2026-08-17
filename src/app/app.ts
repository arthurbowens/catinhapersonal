import { DOCUMENT } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly whatsappPhone = '553384216060';

  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);

  protected readonly whatsappUrl = this.createWhatsAppLink(
    'Olá, Cátia! Vim pelo site e quero começar minha transformação com o protocolo Treino que Transforma.',
  );

  protected readonly whatsappMethodUrl = this.createWhatsAppLink(
    'Olá, Cátia! Vim pelo site e quero conhecer o protocolo. Pode me passar as informações?',
  );

  protected readonly whatsappAssessmentUrl = this.createWhatsAppLink(
    'Olá, Cátia! Vim pelo site e quero fazer minha avaliação do protocolo Treino que Transforma.',
  );

  protected readonly navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Protocolo', href: '#metodo' },
    { label: 'Parceria/Médica', href: '#multiprofissional' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
  ];

  constructor() {
    effect(() => {
      this.document.body.classList.toggle('overflow-hidden', this.menuOpen());
    });
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private createWhatsAppLink(message: string): string {
    return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`;
  }

  protected readonly results = [
    { src: '/resultado1.jpeg', type: 'image' as const, label: 'Resultado 1' },
    { src: '/resultado2.jpeg', type: 'image' as const, label: 'Resultado 2' },
    { src: '/resultado3.mp4', type: 'video' as const, label: 'Resultado 3' },
    { src: '/resultado4.mp4', type: 'video' as const, label: 'Resultado 4' },
    { src: '/resultado5.mp4', type: 'video' as const, label: 'Resultado 5' },
    { src: '/resultado6.mp4', type: 'video' as const, label: 'Resultado 6' },
    { src: '/resultado7.mp4', type: 'video' as const, label: 'Resultado 7' },
    { src: '/resultado8.mp4', type: 'video' as const, label: 'Resultado 8' },
    { src: '/resultado9.mp4', type: 'video' as const, label: 'Resultado 9' },
    { src: '/resultado10.mp4', type: 'video' as const, label: 'Resultado 10' },
  ];

  protected scrollResults(direction: 1 | -1): void {
    const track = this.document.getElementById('results-carousel');
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.85, 360);
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  protected readonly recognitionItems = [
    'Começado várias dietas e abandonado',
    'Emagrecido e recuperado o peso',
    'Comprado roupas esperando que um dia voltassem a servir',
    'Evitado fotos ou determinados tipos de roupa',
    'Se olhado no espelho e não reconhecido o corpo que vê',
    'Sentido vergonha de tirar a camisa, colocar um biquíni ou usar roupa mais justa',
    'Começado a academia várias vezes e parado',
    'Usado a comida como recompensa em momentos de ansiedade',
  ];

  protected readonly cycleBadRows = [
    ['COMEÇO', 'EMAGREÇO', 'RELAXO'],
    ['ENGORDO', 'ME CULPO', 'RECOMEÇO'],
  ];
  protected readonly cycleGoodRows = [
    ['DECISÃO', 'ESTRATÉGIA', 'CONSTÂNCIA'],
    ['EVOLUÇÃO', 'NOVOS HÁBITOS', ''],
  ];

  protected readonly protocolOutcomePairs = [
    ['Emagrecimento', 'Redução de medidas'],
    ['Condicionamento físico', 'Mais disposição'],
    ['Melhora dos hábitos', 'Consistência'],
    ['Confiança', 'Autoestima'],
  ];

  protected readonly protocolIncludes = [
    'Anamnese e avaliação inicial',
    'Avaliação da composição corporal',
    'Treinamento individualizado e adaptado ao seu nível',
    'Acompanhamento próximo da sua evolução',
    'Definição de metas e acompanhamento periódico',
    'Estratégias para organização da rotina e construção de novos hábitos',
    'Monitoramento de peso, medidas e evolução corporal',
    'Orientação para melhora da constância e adesão ao processo',
  ];

  protected readonly pillars = [
    {
      title: 'Não dependa da motivação. Construa disciplina.',
      body: 'Motivação é importante para começar. Disciplina é o que sustenta o processo quando a motivação desaparece. Uma refeição fora do planejado não precisa virar uma semana inteira fora. Um treino perdido não precisa virar um mês sem treinar. Resultado não exige perfeição, exige consistência.',
    },
    {
      title: 'Pare de se sabotar.',
      body: '“Hoje eu mereço.” “Amanhã eu compenso.” “Só esse final de semana.” “Na segunda eu volto.” Essas pequenas negociações, quando se repetem, afastam você do resultado. O trabalho é desenvolver responsabilidade, organização, constância e consciência sobre as escolhas.',
    },
    {
      title: 'Treino não é castigo.',
      body: 'Você não precisa treinar para pagar pelo que comeu. Treinar com estratégia é diferente de simplesmente se cansar. O objetivo é fazer com que o exercício deixe de ser algo que você “precisa suportar” e passe a fazer parte da vida que você está construindo.',
    },
  ];

  protected readonly steps = [
    {
      step: '1',
      title: 'Avaliação inicial',
      description:
        'Conhecemos seu ponto de partida, objetivos, rotina, histórico e principais dificuldades.',
    },
    {
      step: '2',
      title: 'Estratégia individual',
      description:
        'O acompanhamento é direcionado às necessidades e aos objetivos identificados no processo.',
    },
    {
      step: '3',
      title: 'Treinamento direcionado',
      description:
        'O exercício é estruturado para contribuir com sua evolução física, condicionamento e composição corporal.',
    },
    {
      step: '4',
      title: 'Organização da rotina',
      description:
        'Estratégias para o processo existir na vida real: trabalho, família, compromissos e imprevistos.',
    },
    {
      step: '5',
      title: 'Acompanhamento',
      description:
        'Sua evolução é acompanhada para identificar dificuldades, ajustar estratégias e evitar o abandono.',
    },
    {
      step: '6',
      title: 'Evolução',
      description:
        'Acompanhamos peso, medidas, desempenho, hábitos e evolução corporal de acordo com cada caso.',
    },
  ];

  protected readonly buildItems = [
    'Voltar a vestir aquela roupa que você gosta',
    'Olhar uma foto sua e gostar do que vê',
    'Ter disposição para trabalhar e aproveitar a família',
    'Sentir o corpo mais forte',
    'Subir uma escada sem o mesmo cansaço',
    'Perceber as medidas diminuindo',
    'Escolher roupa pelo que gostou, e não só pelo que serviu',
    'Se olhar no espelho com orgulho',
    'Recuperar a confiança',
    'Perceber que você conseguiu voltar a cuidar de si',
  ];

  protected readonly objections = [
    {
      q: 'Mas eu já tentei várias vezes...',
      a: 'Talvez seja exatamente por isso que você chegou até aqui. Você não precisa provar que consegue fazer tudo sozinho. Se aquilo que você vinha fazendo estivesse funcionando de forma sustentável, provavelmente não estaria procurando uma solução diferente agora.',
    },
    {
      q: 'Eu não tenho tempo.',
      a: 'Talvez você não precise encontrar horas sobrando. Precisa aprender a organizar prioridades dentro da vida que realmente possui.',
    },
    {
      q: 'Eu não tenho disciplina.',
      a: 'Disciplina não é algo reservado para algumas pessoas. Ela é construída através de decisões repetidas.',
    },
    {
      q: 'Tenho medo de começar e desistir novamente.',
      a: 'Então não comece pensando nos próximos seis meses. Comece tomando a primeira decisão.',
    },
  ];

  protected readonly faqs = [
    {
      q: 'O protocolo é para homens e mulheres?',
      a: 'Sim. O acompanhamento é destinado a homens e mulheres que buscam emagrecimento, transformação corporal, melhora dos hábitos e maior qualidade de vida, respeitando as necessidades individuais.',
    },
    {
      q: 'Preciso já estar treinando?',
      a: 'Não necessariamente. Seu ponto de partida será considerado na estratégia.',
    },
    {
      q: 'E se eu já tentei emagrecer outras vezes?',
      a: 'Isso não impede um novo processo. Pelo contrário: entender onde as tentativas anteriores falharam pode ajudar na construção de uma estratégia mais adequada.',
    },
    {
      q: 'Vou precisar mudar toda a minha vida de uma vez?',
      a: 'Não. Mudanças sustentáveis são construídas progressivamente. O objetivo é desenvolver uma rotina que você consiga manter.',
    },
    {
      q: 'Os resultados são iguais para todo mundo?',
      a: 'Não. Cada organismo, rotina, histórico e nível de adesão são diferentes. Por isso, não existe garantia de uma quantidade específica de quilos ou medidas.',
    },
  ];
}
