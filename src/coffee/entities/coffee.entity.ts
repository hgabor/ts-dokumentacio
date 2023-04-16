import { Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

export class Coffee {
  /**
   * A kávé ID-je
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * A kávé neve, egyedi
   */
  @Column({ unique: true })
  name: string;

  /**
   * Koffeinmentes-e vagy sem
   */
  @Column()
  decaf: boolean;
}
