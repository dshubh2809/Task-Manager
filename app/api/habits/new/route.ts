import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/authOptions';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { title } = await request.json();

  const habit = await prisma.habits.create({
    data: {
      userId: session.user.id,
      title,
    },
  });

  return NextResponse.json(habit, { status: 200 });
}
