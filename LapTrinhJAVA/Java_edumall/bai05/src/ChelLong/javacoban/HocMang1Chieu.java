package ChelLong.javacoban;

import java.util.Arrays;

public class HocMang1Chieu {
	public static void main (String [] args) {
		int M[] = new int[4];
		
		M[0] = 7;
		M[1] = 0;
		M[2] = 3;
		M[3] = 9;
		
		System.out.println("mảng của ban là: ");
		for (int i = 0; i < M.length; i++) {
			System.out.print(M[i] + "\t");
		}
		System.out.println();
		Arrays.sort(M); //phương thức sắp xếp trong mảng
		System.out.println("mảng sau khi sắp xếp là: ");
		for (int i = 0; i < M.length; i++) {
			System.out.print(M[i] + "\t");
		}
		System.out.println();
		System.out.println("các số nguyên tố là: ");
		for (int i = 0; i < M.length; i++) {
			int dem = 0;
			for (int j = 1; j <= M[i]; j++) {
				if (M[i]%j==0) {
					dem++;
				}
			}
			if (dem == 2) {
				System.out.print(M[i] + "\t");
			}
		}
	}
}