import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()
n = 10
k = 8

i = 1
V = [[0], [1]]

def createVectors(V, i):
    if i == n:
        return V
    next_V = []
    for v in V:
        next_V.append(v + [0])
        next_V.append(v + [1])

    return createVectors(next_V, i+1)

return 



plt.contourf(xx,yy,z, alpha=0.8)
plt.colorbar();
plt.axis('square')

ax.spines['left'].set_position('zero')
ax.spines['right'].set_color('none')
ax.spines['bottom'].set_position('zero')
ax.spines['top'].set_color('none')

# remove the ticks from the top and right edges
ax.xaxis.set_ticks_position('bottom')
ax.yaxis.set_ticks_position('left')
ax.set_xlabel('$z_1$', fontsize=14)
ax.set_ylabel('$z_2$', fontsize=14, rotation=0)
ax.xaxis.set_label_coords(0.95, 0.55)
ax.yaxis.set_label_coords(0.47,0.93)
plt.locator_params(nbins=2)
plt.title('$R_\Lambda$ isocontours with $\lambda_1 = 2$ and $\lambda_2 = 1$')
plt.savefig('pics/rayleigh_plot.png')
