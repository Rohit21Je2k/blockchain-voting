#include <bits/stdc++.h>
using namespace std;

void main() {
    vector<int> map(26, 0);
    vector<int> smap(26, 0);
    string p = s0;
    string s = s1;

    for (int i = 0; i < p.size(); i++) {
        map[p[i] - 'a']++;
    }
    int res = 0;

    int i = 0, j = 0;

    while (j < s.size()) {
        smap[s[j] - 'a']++;
        if (j - i + 1 < p.size()) {
            j++;
        } else {
            if (j - i + 1 == p.size()) {
                if (map == smap) {
                    res++;
                }
                smap[s[i] - 'a']--;
                i++;
                j++;
            }
        }
    }

    return res;
}
