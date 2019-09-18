import { trigger, state, style, animate, transition, query, stagger, group, animateChild } from '@angular/animations';

export const dropdown = (slideDownHeight = '100%', animation = '400ms cubic-bezier(0.35, 0, 0.25, 1)') => trigger('dropdown', [
    state('*', style({
        transform: 'none'
    })),
    state('collapsed', style({
        transform: 'translateY(-100%)'
    })),
    state('expanded', style({
        transform: `translateY(${slideDownHeight})`
    })),
    transition('collapsed <=> expanded', [
        animate(`${animation}`)
    ])
]);

export const staggeredFadeIn =
    (elementSelector = 'li',
        animationDuration = '500ms',
        timingFunction = 'cubic-bezier(0.35, 0, 0.25, 1)') => trigger('staggeredFadeIn', [
            transition(':enter', [
                query(`${elementSelector}`, [
                    style({ opacity: 0, transform: 'translateY(-100px)' }),
                    stagger(-30, [
                        animate(`${animationDuration} ${timingFunction}`, style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ]);

// export const routeSlide = () =>
//     trigger('routeSlide', [
//         transition('* <=> *', [
//             style({ position: 'relative' }),
//             query(':enter, :leave', [
//                 style({
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%'
//                 })
//             ]),
//             query(':enter', [
//                 style({ left: '-100%' })
//             ]),
//             query(':leave', animateChild()),
//             group([
//                 query(':leave', [
//                     animate('300ms ease-out', style({ left: '100%' }))
//                 ]),
//                 query(':enter', [
//                     animate('300ms ease-out', style({ left: '0%' }))
//                 ])
//             ]),
//             query(':enter', animateChild()),
//         ]),
//     ]);
