'use client';

import * as React from 'react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectData {
  title: string;
  description: string;
  /** URL da imagem do projeto */
  link: string;
  /** Cor de fundo do card */
  color: string;
  /** Categoria / tag opcional exibida acima do título */
  category?: string;
  /** Link opcional para "Ver projeto" */
  href?: string;
}

/** Quantos cards anteriores ficam visíveis empilhados atrás do card ativo */
const VISIBLE_DEPTH = 3;
const SCALE_STEP = 0.05;
const OFFSET_STEP = 22; // px

interface CardProps {
  project: ProjectData;
  /** posição relativa ao card ativo: 0 = ativo, <0 = já passou (empilhado), >0 = próximo */
  position: number;
  total: number;
  onDragNext: () => void;
  onDragPrev: () => void;
}

export const Card = ({ project, position, total, onDragNext, onDragPrev }: CardProps) => {
  const isActive = position === 0;
  const depth = Math.min(-position, VISIBLE_DEPTH);

  // Estados de animação: replicam o efeito do modelo por rolagem
  // (cards anteriores encolhem e sobem; o próximo entra por cima da pilha)
  const animate =
    position > 0
      ? { x: '115%', y: 0, scale: 1, opacity: 0, rotate: 6 }
      : {
          x: 0,
          y: -depth * OFFSET_STEP,
          scale: 1 - depth * SCALE_STEP,
          opacity: -position > VISIBLE_DEPTH ? 0 : 1,
          rotate: 0,
        };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) onDragNext();
    else if (info.offset.x > 80 || info.velocity.x > 500) onDragPrev();
  };

  return (
    <motion.article
      initial={false}
      animate={animate}
      transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }}
      drag={isActive ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      onDragEnd={handleDragEnd}
      style={{
        backgroundColor: project.color,
        zIndex: total + position,
      }}
      aria-hidden={!isActive}
      className={cn(
        'absolute inset-0 origin-top rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl',
        'flex flex-col border border-white/10 overflow-hidden',
        isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      )}
    >
      {/* Brilho sutil */}
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]' />

      <div className='relative flex flex-col items-center text-center'>
        {project.category && (
          <span className='mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70'>
            {project.category}
          </span>
        )}
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight'>
          {project.title}
        </h3>
      </div>

      <div className='relative mt-5 flex h-full min-h-0 flex-col-reverse gap-5 md:flex-row md:gap-10'>
        <div className='md:w-[40%] md:pt-[6%] flex flex-col'>
          <p className='text-sm sm:text-[15px] leading-relaxed text-white/85'>
            {project.description}
          </p>
          <a
            href={project.href ?? '#contato'}
            tabIndex={isActive ? 0 : -1}
            onPointerDown={(e) => e.stopPropagation()}
            className='group/link mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors'
          >
            Ver projeto
            <ArrowUpRight className='size-4 transition-transform duration-300 group-hover/link:rotate-45' />
          </a>
        </div>

        <div className='relative min-h-[160px] flex-1 md:w-[60%] md:h-full overflow-hidden rounded-2xl'>
          <motion.div
            className='h-full w-full'
            initial={false}
            animate={{ scale: isActive ? 1 : 1.35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={project.link}
              alt={project.title}
              draggable={false}
              className='absolute inset-0 h-full w-full object-cover select-none'
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
  className?: string;
}

const Component = React.forwardRef<HTMLDivElement, ComponentRootProps>(
  ({ projects, className }, ref) => {
    const [index, setIndex] = React.useState(0);
    const total = projects.length;

    const canPrev = index > 0;
    const canNext = index < total - 1;

    const next = React.useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
    const prev = React.useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };

    const arrowClass =
      'relative z-50 shrink-0 grid place-items-center size-10 sm:size-12 lg:size-14 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground shadow-md transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none cursor-pointer';

    return (
      <div
        ref={ref}
        role='region'
        aria-roledescription='carousel'
        aria-label='Projetos'
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={cn('w-full outline-none', className)}
      >
        <div className='flex items-center gap-2 sm:gap-4 lg:gap-8'>
          <button
            id='stacking-card-prev'
            type='button'
            onClick={prev}
            disabled={!canPrev}
            aria-label='Projeto anterior'
            className={arrowClass}
          >
            <ArrowLeft className='size-4 sm:size-5' />
          </button>

          {/* Palco dos cards (espaço superior reservado para a pilha) */}
          <div className='relative flex-1 pt-16'>
            <div className='relative h-[540px] sm:h-[500px] md:h-[440px] lg:h-[460px]'>
              {projects.map((project, i) => (
                <Card
                  key={`p_${i}`}
                  project={project}
                  position={i - index}
                  total={total}
                  onDragNext={next}
                  onDragPrev={prev}
                />
              ))}
            </div>
          </div>

          <button
            id='stacking-card-next'
            type='button'
            onClick={next}
            disabled={!canNext}
            aria-label='Próximo projeto'
            className={arrowClass}
          >
            <ArrowRight className='size-4 sm:size-5' />
          </button>
        </div>

        {/* Indicadores */}
        <div className='mt-8 flex items-center justify-center gap-4'>
          <span className='font-mono text-xs tabular-nums text-muted-foreground'>
            <AnimatePresence mode='popLayout' initial={false}>
              <motion.span
                key={index}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                className='inline-block text-foreground'
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>{' '}
            / {String(total).padStart(2, '0')}
          </span>
          <div className='flex items-center gap-1.5'>
            {projects.map((p, i) => (
              <button
                key={`dot_${i}`}
                type='button'
                onClick={() => setIndex(i)}
                aria-label={`Ir para ${p.title}`}
                aria-current={i === index}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500 cursor-pointer',
                  i === index ? 'w-8 bg-foreground' : 'w-1.5 bg-foreground/25 hover:bg-foreground/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Component.displayName = 'StackingCards';

export default Component;
