CC := gcc
AR := ar
CFLAGS = -O0
TARGET = run.o
LIB = libstat.a

all: $(TARGET)

$(TARGET): $(LIB) main.o
	$(CC) $(CFLAGS) $^ -L ./ -lstat -o $@

$(LIB): sum.o
	$(AR) -r $@ $^

%.o: %.c
	$(CC) -c $< -o $@

clean:
	rm -f *.o