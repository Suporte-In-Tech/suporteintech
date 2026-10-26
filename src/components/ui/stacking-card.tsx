'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
const SCALE_STEP = 0.04;
const OFFSET_STEP = 20; // px

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
  const isDraggingRef = React.useRef(false);

  // Estados de animação: replicam o efeito do modelo por rolagem
  // (cards anteriores encolhem e sobem; o próximo entra por cima da pilha)
  const animate =
    position > 0
      ? { x: '115%', y: 0, scale: 1, opacity: 0, rotate: 4 }
      : {
          x: 0,
          y: -depth * OFFSET_STEP,
          scale: 1 - depth * SCALE_STEP,
          opacity: -position > VISIBLE_DEPTH ? 0 : 1,
          rotate: 0,
        };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100);
    if (info.offset.x < -80 || info.velocity.x < -500) onDragNext();
    else if (info.offset.x > 80 || info.velocity.x > 500) onDragPrev();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
    }
  };

  return (
    <motion.article
      initial={false}
      animate={animate}
      transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }}
      drag={isActive ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        backgroundColor: project.color,
        zIndex: total + position,
      }}
      aria-hidden={!isActive}
      className={cn(
        'absolute inset-0 origin-top rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 shadow-xl select-none',
        isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      )}
    >
      <Link
        href={project.href ?? '#'}
        tabIndex={isActive ? 0 : -1}
        onClick={handleClick}
        className={cn(
          'group relative block w-full h-full overflow-hidden',
          !isActive && 'pointer-events-none'
        )}
      >
        <Image
          src={project.link}
          alt={project.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 1152px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          draggable={false}
        />

        {/* Badge de ação rápida no hover (sem escurecer o card) */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 sm:p-6 lg:p-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
            <span>Acessar Case Completo</span>
            <ArrowUpRight className="size-3.5 sm:size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
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
        <div className='flex items-center gap-2 sm:gap-4 lg:gap-6'>
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
          <div className='relative flex-1 pt-8 sm:pt-10'>
            <div className='relative w-full aspect-[16/9]'>
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
        <div className='mt-6 sm:mt-8 flex items-center justify-center gap-4'>
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
