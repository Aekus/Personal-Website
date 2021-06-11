import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()
N = 400
omega = np.linspace(0, 2 * np.pi, N)
r = 1
x, y = r * np.cos(omega), r * np.sin(omega)

plt.plot(x, y, color='red', label='$||z||_2 = 1$')

lam_1 = 2
lam_2 = 1

x = np.linspace(-1.5,1.5,100)
y = np.linspace(-1.5,1.5,100)
xx, yy = np.meshgrid(x, y)

z = lam_1 * xx**2 + lam_2 * yy**2

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
