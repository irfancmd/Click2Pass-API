import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ type: 'varchar', length: 256, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 256 })
  password: string;

  @Column({ name: 'role_id', type: 'bigint', unsigned: true, nullable: true })
  roleId: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;
}
