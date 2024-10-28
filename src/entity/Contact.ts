import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({ nullable: true })
    phone: string

    @Column({ nullable: true })
    company: string

    @Column()
    subject: string

    @Column({ nullable: true })
    website: string

    @Column({ type: 'text' })
    message: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
}
