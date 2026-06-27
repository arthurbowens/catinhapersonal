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

  /** Atualize com DDI + DDD + número, somente dígitos (ex: 5511999999999) */
  private readonly whatsappPhone = '553384216060';

  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);

  protected readonly whatsappUrl = this.createWhatsAppLink(
    'Olá, Cátia! Vim pelo site e quero começar agora com o método Treino que Transforma. Pode me ajudar?',
  );

  protected readonly whatsappMethodUrl = this.createWhatsAppLink(
    'Olá, Cátia! Vim pelo site e gostaria de conhecer melhor o método Treino que Transforma.',
  );

  protected readonly navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Método', href: '#metodo' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
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

  protected readonly methodItems = [
    {
      title: 'Treinos Personalizados',
      description:
        'Cada treino é planejado de acordo com seu objetivo, rotina, limitações e nível de condicionamento.',
      icon: 'dumbbell',
    },
    {
      title: 'Estratégia para Emagrecimento',
      description:
        'Exercícios organizados para aumentar o gasto calórico, preservar massa muscular e acelerar seus resultados.',
      icon: 'flame',
    },
    {
      title: 'Acompanhamento Individual',
      description:
        'Você recebe suporte durante todo o processo para manter a consistência, ajustar o plano quando necessário e continuar evoluindo.',
      icon: 'users',
    },
    {
      title: 'Evolução Contínua',
      description:
        'Seu treino acompanha sua evolução para que seu corpo continue respondendo e você não fique estagnada.',
      icon: 'trending',
    },
  ];

  protected readonly forYouItems = [
    'Quer emagrecer de forma saudável.',
    'Deseja perder gordura sem dietas malucas.',
    'Quer definir o corpo.',
    'Vive começando e desistindo dos treinos.',
    'Precisa de alguém acompanhando sua evolução.',
    'Busca mais autoestima, disposição e qualidade de vida.',
  ];

  protected readonly achievements = [
    'Redução do percentual de gordura.',
    'Mais definição muscular.',
    'Mais disposição para o dia a dia.',
    'Treinos adaptados à sua rotina.',
    'Hábitos que realmente funcionam.',
    'Mais confiança ao olhar no espelho.',
  ];

  protected readonly steps = [
    {
      step: '1',
      title: 'Avaliação',
      description: 'Entendo seus objetivos, rotina e histórico.',
    },
    {
      step: '2',
      title: 'Planejamento',
      description: 'Montamos um programa totalmente personalizado.',
    },
    {
      step: '3',
      title: 'Acompanhamento',
      description: 'Você recebe suporte constante durante toda sua evolução.',
    },
    {
      step: '4',
      title: 'Resultados',
      description:
        'Com disciplina, estratégia e consistência, os resultados aparecem de forma progressiva e duradoura.',
    },
  ];

  protected readonly whyChoose = [
    'Atendimento individualizado.',
    'Treinos personalizados.',
    'Suporte próximo.',
    'Estratégia focada em emagrecimento feminino.',
    'Método estruturado.',
    'Evolução acompanhada de perto.',
  ];
}
