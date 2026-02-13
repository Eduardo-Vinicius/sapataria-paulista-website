"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function PrivacidadePage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="flex min-h-[40vh] items-end bg-primary px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">
            Legal
          </p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-primary-foreground lg:text-6xl">
            Politica de Privacidade
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="animate-on-scroll flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                1. Coleta de Dados
              </h2>
              <p>
                {"A Sapataria Paulista coleta apenas os dados necessarios para a prestacao de nossos servicos: nome, telefone, e-mail e imagens dos itens enviados para avaliacao. Nao compartilhamos seus dados com terceiros."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                2. Uso dos Dados
              </h2>
              <p>
                {"Seus dados sao utilizados exclusivamente para: comunicacao sobre servicos solicitados, envio de orcamentos, atualizacoes sobre o andamento de restauracoes e, quando autorizado, envio de novidades e promocoes."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                3. Armazenamento
              </h2>
              <p>
                {"Os dados sao armazenados de forma segura e por tempo indeterminado, podendo ser excluidos mediante solicitacao do titular."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                4. Imagens
              </h2>
              <p>
                {"As imagens dos itens podem ser utilizadas em nosso portfolio e redes sociais para fins de divulgacao, sempre preservando a privacidade do cliente. Caso nao deseje a divulgacao, informe-nos."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                5. Seus Direitos
              </h2>
              <p>
                {"Voce tem direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Entre em contato pelo WhatsApp ou e-mail para exercer seus direitos."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl text-foreground">
                6. Contato
              </h2>
              <p>
                {"Para questoes sobre privacidade, entre em contato: WhatsApp (11) 99999-9999 ou visite-nos na Av. Paulista 2001, Sao Paulo - SP."}
              </p>
            </div>

            <p className="mt-8 border-t border-border/50 pt-8 text-xs text-muted-foreground">
              {"Ultima atualizacao: Fevereiro de 2026"}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
